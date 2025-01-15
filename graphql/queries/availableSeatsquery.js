import db from '../../models/index.js';
import SeatType from '../types/availableSeatsType.js';
import { GraphQLList, GraphQLInt } from 'graphql';

const availableSeatsForFlightQueryResolver = async (_, { flightId }) => {
    try {
      // Step 1: Fetch flight and plane details
      const flight = await db.Flight.findOne({
        where: { id: flightId },
        include: {
          model: db.Plane,
          as: 'plane', // Ensure the alias matches the association
          attributes: ['numberOfRows', 'numberOfSeatsPerRow'],
        },
      });
  
      if (!flight || !flight.plane) {
        throw new Error('Flight or Plane details not found');
      }
  
      // Now, access the Plane data using `flight.plane`
      const { numberOfRows, numberOfSeatsPerRow } = flight.plane;
  
      // Step 2: Generate all possible seat combinations
      const allSeats = [];
      for (let i = 1; i <= numberOfRows; i++) {
        for (let j = 0; j < numberOfSeatsPerRow; j++) {
          const seat = `${String.fromCharCode(65 + j)}`; // Convert j to 'A', 'B', etc.
          allSeats.push({ row: i, seat: seat });
        }
      }
  
      // Step 3: Fetch taken seats for the flight
      const takenSeats = await db.CheckedTicket.findAll({
        where: { ticketId: flightId },
        attributes: ['row', 'seat'],
      });
  
      const takenSeatSet = new Set(
        takenSeats.map((seat) => `${seat.row}-${seat.seat}`)
      );
  
      // Step 4: Filter available seats
      const availableSeats = allSeats.filter(
        (seat) => !takenSeatSet.has(`${seat.row}-${seat.seat}`)
      );
  
      return availableSeats;
    } catch (error) {
      console.error('Error fetching available seats:', error);
      throw error;
    }
  };
const availableSeatsForFlightQuery = {
    type: new GraphQLList(SeatType),
    args: {
        flightId: { type: GraphQLInt },
    },
    resolve: availableSeatsForFlightQueryResolver,
};
export default availableSeatsForFlightQuery;