import {GraphQLInt} from 'graphql';
import checkedTicketType from '../types/checkedTicketType.js';
import db from '../../models/index.js';
import ticket from '../../models/ticket.js';

const checkedTicketQueryResolver = async (_, { ticketId }) => {
    const ticket = await db.CheckedTicket.findOne({
        where: {
            ticketId
        }
    });

    if(!ticket) {
        return null;
    }

    return ticket;
}

const checkedTicketQuery = {
    type: checkedTicketType,
    args: {
        ticketId: { type: GraphQLInt },
    },
    resolve: checkedTicketQueryResolver,
};

export default checkedTicketQuery;