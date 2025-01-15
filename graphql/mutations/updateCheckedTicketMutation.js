import graphql from 'graphql';
import checkedTicketInputType from '../types/checkedTicketInputType.js';
import checkedTicketType from '../types/checkedTicketType.js';
import db from '../../models/index.js';

const updateCheckedTicketMutationResolver = async (_, args) => {
    const id = args.id;

    const checkedTicket = await db.CheckedTicket.findOne({
        where: {
            id,
        }
    });

    if(!checkedTicket) {
        return false;
    }

    const updatedCheckedTicket = await checkedTicket.update({
        ...args.checkedTicket,
    });

    return updatedCheckedTicket;
}

const updateCheckedTicketMutation = {
    type: checkedTicketType,
    args: {
        id: {type: graphql.GraphQLInt},
        checkedTicket: {type: checkedTicketInputType},
    },
    resolve: updateCheckedTicketMutationResolver,
};

export default updateCheckedTicketMutation;