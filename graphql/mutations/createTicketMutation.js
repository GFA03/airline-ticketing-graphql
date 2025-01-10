import ticketInputType from '../types/ticketInputType.js';
import db from '../../models/index.js';
import ticketType from '../types/ticketType.js';

const createTicketMutationResolver = async (_, { ticket }, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const userId = context.userId;


    const createdTicket = await db.Ticket.create({
        flightId: ticket.flightId,
        userId: userId,
    })

    console.log(createdTicket);

    return createdTicket;
}

const createTicketMutation = {
    type: ticketType,
    args: {
        ticket: {type: ticketInputType},
    },
    resolve: createTicketMutationResolver,
};

export default createTicketMutation;