import {GraphQLInt} from 'graphql';
import ticketType from '../types/ticketType.js';
import db from '../../models/index.js';

const ticketQueryResolver = async (_, { userId, flightId }) => {
    const ticket = await db.Ticket.findOne({
        where: {
            userId,
            flightId,
        }
    });

    if(!ticket) {
        return null;
    }

    return ticket;
}

const ticketQuery = {
    type: ticketType,
    args: {
        userId: { type: GraphQLInt },
        flightId: { type: GraphQLInt },
    },
    resolve: ticketQueryResolver,
};

export default ticketQuery;