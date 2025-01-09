import {GraphQLInputObjectType, GraphQLString, GraphQLInt} from 'graphql'

const flightInputType = new GraphQLInputObjectType({
    name: 'FlightInput',
    fields: {
        airline: { type: GraphQLString },
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departure_time: { type: GraphQLString },
        arrival_time: { type: GraphQLString },
        duration: { type: GraphQLInt },
        total_seats: { type: GraphQLInt },
    }
});

export default flightInputType;