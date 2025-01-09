import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'

const flightType = new GraphQLObjectType({
    name: 'Flight',
    fields: {
        id: { type: GraphQLInt },
        airline: { type: GraphQLString },
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departure_time: { type: GraphQLString },
        arrival_time: { type: GraphQLString },
        duration: { type: GraphQLInt },
        total_seats: { type: GraphQLInt }
    }
});

export default flightType;