import { createTicket } from '../../core/services/createTicketService.js';
import ticketInputType from '../types/ticketInputType.js';
import ticketType from '../types/ticketType.js';

const createTicketMutationResolver = async (_, { ticket }, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return null;
    }

    const createdTicket = await createTicket(_, { ticket, userId: context.userId }, context);

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