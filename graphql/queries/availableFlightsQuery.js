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

  // Fetch flights excluding booked ones, with future departures
  const availableFlights = await db.Flight.findAll({
    where: {
      id: {
        [Op.notIn]: bookedFlightIds, // Exclude booked flights
      },
      departureTime: {
        [Op.gt]: new Date(), // Only future flights
      },
    },
    include: {
      model: db.Plane,
      as: 'plane',
      attributes: ['numberOfRows', 'numberOfSeatsPerRow'],
    },
  });

  // Filter flights with available seats using Promise.all
  const filteredFlights = await Promise.all(
    availableFlights.map(async (flight) => {
      const { numberOfRows, numberOfSeatsPerRow } = flight.plane;

      // Step 1: Generate all possible seat combinations
      const allSeats = [];
      for (let i = 1; i <= numberOfRows; i++) {
        for (let j = 0; j < numberOfSeatsPerRow; j++) {
          const seat = `${String.fromCharCode(65 + j)}`; // Convert j to 'A', 'B', etc.
          allSeats.push({ row: i, seat: seat });
        }
      }

      // Step 2: Fetch taken seats for the flight
      const takenSeats = await db.CheckedTicket.findAll({
        where: { ticketId: flight.id },
        attributes: ['row', 'seat'],
      });

      const takenSeatSet = new Set(
        takenSeats.map((seat) => `${seat.row}-${seat.seat}`)
      );

      // Step 3: Filter available seats
      const availableSeats = allSeats.filter(
        (seat) => !takenSeatSet.has(`${seat.row}-${seat.seat}`)
      );

      // Only return flight if there are available seats
      if (availableSeats.length > 0) {
        return flight;
      }
      return null;
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
