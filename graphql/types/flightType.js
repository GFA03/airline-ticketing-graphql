import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'

const flightType = new GraphQLObjectType({
    name: 'Flight',
    fields: {
        id: { type: GraphQLInt },
        airline: { type: GraphQLString },
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departureTime: { type: GraphQLString },
        arrivalTime: { type: GraphQLString },
        duration: { type: GraphQLInt },
        totalSeats: { type: GraphQLInt }
    }
});

export default flightType;