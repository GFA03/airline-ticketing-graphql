import { GraphQLList } from 'graphql';
import checkedTicketType from '../types/checkedTicketType.js';
import db from '../../models/index.js';

const checkedTicketsQueryResolver = async () => {
    const checkedTickets = await db.CheckedTicket.findAll();

    return checkedTickets;
}

const checkedTicketsQuery = {
    type: new GraphQLList(checkedTicketType),
    resolve: checkedTicketsQueryResolver,
};

export default checkedTicketsQuery;