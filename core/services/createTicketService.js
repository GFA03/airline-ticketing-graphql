import db from "../../models/index.js";

export const createTicket = async (_, { ticket, userId }, context) => {
    // Check if the flight exists
    const flight = await db.Flight.findOne({
        where: {
            id: ticket.flightId,
        }
    })

    if (!flight) {
        return null;
    }

    // Check if there are any seats left for the flight
    const tickets = await db.Ticket.findAll({
        where: {
            flightId: ticket.flightId,
        }
    });

    if (tickets.length >= flight.totalSeats) {
        return null;
    }


    const createdTicket = await db.Ticket.create({
        flightId: ticket.flightId,
        userId: userId,
    })

    return createdTicket;
}