import { GraphQLList } from "graphql";
import flightType from "../types/flightType.js";
import db from "../../models/index.js";
import { Op } from "sequelize";

// should look at userId to see if they got a ticket already

/*
Exclude:
- Flights that have already been booked by current user
- departureTime <= nowTime
- No seats available
*/
const availableFlightsQueryResolver = async (_, {}, context) => {
  // Check if the user is authorized
  const isAuthorized = !!context.userId;

  if (!isAuthorized) {
    return false;
  }

  // Fetch all tickets for the current user
  const userTickets = await db.Ticket.findAll({
    where: {
      userId: context.userId,
    },
  });

  // Extract flightIds the user has already booked
  const bookedFlightIds = userTickets.map((ticket) => ticket.flightId);

  // Fetch flights excluding booked ones, with available seats, and future departures
  const availableFlights = await db.Flight.findAll({
    where: {
      id: {
        [Op.notIn]: bookedFlightIds, // Exclude booked flights
      },
      departureTime: {
        [Op.gt]: new Date(), // Only future flights
      },
    },
  });

  // Filter flights with available seats using Promise.all
  const filteredFlights = await Promise.all(
    availableFlights.map(async (flight) => {
      const { count } = await db.Ticket.findAndCountAll({
        where: {
          flightId: flight.id,
        },
      });

      // Return true if seats are available
      return count < flight.totalSeats ? flight : null;
    })
  );

  // Filter out null values (flights with no available seats)
  return filteredFlights.filter(Boolean);
};

const availableFlightsQuery = {
  type: new GraphQLList(flightType),
  resolve: availableFlightsQueryResolver,
};

export default availableFlightsQuery;
