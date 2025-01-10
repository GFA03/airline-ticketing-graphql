import {GraphQLBoolean, GraphQLInt} from 'graphql';
import db from '../../models/index.js';

const deleteTicketResolver = async (_, args, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const ticket = await db.Ticket.findOne({
        where: {
            userId: args.userId,
            flightId: args.flightId
        }
    })

    if (!ticket) {
        return false;
    }

    await ticket.destroy();
    return true;
}

const deleteTicketMutation = {
    type: GraphQLBoolean,
    args: {
        userId: {type: GraphQLInt},
        flightId: {type: GraphQLInt},
    },
    resolve: deleteTicketResolver,
};

export default deleteTicketMutation;