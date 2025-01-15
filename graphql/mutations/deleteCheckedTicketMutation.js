import {GraphQLBoolean, GraphQLInt} from 'graphql';
import db from '../../models/index.js';

const deleteCheckedTicketResolver = async (_, args, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const checkedTicket = await db.CheckedTicket.findOne({
        where: {
            id: args.id,
        }
    })

    if (!checkedTicket) {
        return false;
    }

    await checkedTicket.destroy();
    return true;
}

const deleteCheckedTicketMutation = {
    type: GraphQLBoolean,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: deleteCheckedTicketResolver,
};

export default deleteCheckedTicketMutation;