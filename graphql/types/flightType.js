import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'
import { GraphQLDate } from 'graphql-compose';

const flightType = new GraphQLObjectType({
    name: 'Flight',
    fields: {
        id: { type: GraphQLInt },
        airline: { type: GraphQLString },
        planeId: {type: GraphQLInt},
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departureTime: { type: GraphQLDate },
        arrivalTime: { type: GraphQLDate },
        duration: { type: GraphQLInt },
    }
});

export default flightType;