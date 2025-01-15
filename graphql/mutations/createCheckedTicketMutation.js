import checkedTicketInputType from '../types/checkedTicketInputType.js';
import db from '../../models/index.js';
import checkedTicketType from '../types/checkedTicketType.js';

const availableSeatsForFlight = async ( flightId) => {
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
        
        attributes: ['row', 'seat'],
        include:{
            model: db.Ticket,
            where: {flightId: flightId}
        }
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
  const createCheckedTicketMutationResolver = async (_, { checkedTicket }, context) => {
    const isAuthorized = !!context.userId;
    if (!isAuthorized) {
      throw new Error("User is not authorized");
    }
  
    // Step 1: Fetch flightId from the Ticket associated with the checkedTicket
    const ticket = await db.Ticket.findOne({
      where: { id: checkedTicket.ticketId },
      attributes: ["flightId"],
    });
  
    if (!ticket) {
      throw new Error("Invalid ticket ID");
    }
  
    const flightId = ticket.flightId;
  
    // Step 2: Fetch available seats for the flight
    const availableSeats = await availableSeatsForFlight(flightId);
  
    // Step 3: Check if the seat is already booked
    const isSeatAvailable = availableSeats.some(
      (seat) => seat.row === checkedTicket.row && seat.seat === checkedTicket.seat
    );
  
    if (!isSeatAvailable) {
      throw new Error("The specified row and seat are already booked");
    }
  
    // Step 4: Create the CheckedTicket
    const createdCheckedTicket = await db.CheckedTicket.create(checkedTicket);
  
    return createdCheckedTicket;
  };

const createCheckedTicketMutation = {
    type: checkedTicketType,
    args: {
        checkedTicket: {type: checkedTicketInputType},
    },
    resolve: createCheckedTicketMutationResolver,
};

export default createCheckedTicketMutation;