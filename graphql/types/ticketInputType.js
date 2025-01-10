import {GraphQLInputObjectType, GraphQLInt} from 'graphql'

const ticketInputType = new GraphQLInputObjectType({
    name: 'TicketInput',
    fields: {
        flightId: { type: GraphQLInt }
    }
});

export default ticketInputType;