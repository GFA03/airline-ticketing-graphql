import checkedTicketInputType from '../types/checkedTicketInputType.js';
import db from '../../models/index.js';
import checkedTicketType from '../types/checkedTicketType.js';


const createCheckedTicketMutationResolver = async (_, { checkedTicket }, context) => {
    const isAuthorized = !!context.userId
    if(!isAuthorized) {
        return false;
    }
    // const existingCheckedTicket = await db.CheckedTicket.findOne({
    //         where: {
    //             ticketId:checkedTicket.ticketId,
    //             row: checkedTicket.row,
    //             seat: checkedTicket.seat,
    //         }
    // });
    // if(!!existingCheckedTicket){
    //     return false
    // }
    ///checkedTicket.userId = context.userId;
    const createdCheckedTicket = await db.CheckedTicket.create(checkedTicket);
   
    
    return createdCheckedTicket;
}

const createCheckedTicketMutation = {
    type: checkedTicketType,
    args: {
        checkedTicket: {type: checkedTicketInputType},
    },
    resolve: createCheckedTicketMutationResolver,
};

export default createCheckedTicketMutation;