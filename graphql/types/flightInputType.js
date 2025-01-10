import {GraphQLInputObjectType, GraphQLString, GraphQLInt} from 'graphql'

const flightInputType = new GraphQLInputObjectType({
    name: 'FlightInput',
    fields: {
        airline: { type: GraphQLString },
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departureTime: { type: GraphQLString },
        arrivalTime: { type: GraphQLString },
        duration: { type: GraphQLInt },
        totalSeats: { type: GraphQLInt },
    }
});

export default flightInputType;