import {GraphQLInputObjectType, GraphQLInt, GraphQLString} from 'graphql'

const checkedTicketInputType = new GraphQLInputObjectType({
    name: 'CheckedTicketInput',
    fields: {
        ticketId: { type: GraphQLInt },
        row: {type: GraphQLInt},
        seat: {type: GraphQLString}
    }
});

export default checkedTicketInputType;