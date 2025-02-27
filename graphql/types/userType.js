import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        role: { type: GraphQLString},
    }
});

export default userType;