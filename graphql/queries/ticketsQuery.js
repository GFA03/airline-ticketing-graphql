import { GraphQLList } from 'graphql';
import ticketType from '../types/ticketType.js';
import db from '../../models/index.js';

const ticketsQueryResolver = async () => {
    const tickets = await db.Ticket.findAll();

    return tickets;
}

const ticketsQuery = {
    type: new GraphQLList(ticketType),
    resolve: ticketsQueryResolver,
};

export default ticketsQuery;