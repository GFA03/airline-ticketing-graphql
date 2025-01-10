import { GraphQLList } from 'graphql';
import ticketType from '../types/ticketType.js';
import db from '../../models/index.js';

const userTicketsQueryResolver = async (_, {}, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const userId = context.userId;

    const userTickets = await db.Ticket.findAll({
        where: {
            userId
        }
    });

    return userTickets;
}

const userTicketsQuery = {
    type: new GraphQLList(ticketType),
    resolve: userTicketsQueryResolver,
};

export default userTicketsQuery;