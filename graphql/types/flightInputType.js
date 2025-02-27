import {GraphQLInputObjectType, GraphQLString, GraphQLInt} from 'graphql'
import { GraphQLDate } from 'graphql-compose';

const flightInputType = new GraphQLInputObjectType({
    name: 'FlightInput',
    fields: {
        airline: { type: GraphQLString },
        planeId: {type: GraphQLInt},
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departureTime: { type: GraphQLDate },
        arrivalTime: { type: GraphQLDate },
        duration: { type: GraphQLInt },
    }
});

export default flightInputType;