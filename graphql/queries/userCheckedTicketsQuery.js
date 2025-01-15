import { GraphQLList } from 'graphql';
import checkedTicketType from '../types/checkedTicketType.js';
import db from '../../models/index.js';

const usercheckedTicketsQueryResolver = async (_, {}, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const userId = context.userId;

    const usercheckedTickets = await db.checkedTicket.findAll({
        where: {
            userId
        }
    });

    return usercheckedTickets;
}

const userCheckedTicketsQuery = {
    type: new GraphQLList(checkedTicketType),
    resolve: usercheckedTicketsQueryResolver,
};

export default userCheckedTicketsQuery;