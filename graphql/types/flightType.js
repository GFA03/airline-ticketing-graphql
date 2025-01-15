import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'
import { GraphQLDate } from 'graphql-compose';
import planeType from "./planeType.js";
import db from "../../models/index.js";

const flightType = new GraphQLObjectType({
    name: 'Flight',
    fields: {
        id: { type: GraphQLInt },
        airline: { type: GraphQLString },
        plane: {
            type: planeType,
            resolve: async (flight) => {
                const user = await db.Plane.findOne({
                where: {
                    id: flight.planeId,
                },
        });

        return user;
      },
          },
        departure: { type: GraphQLString },
        arrival: { type: GraphQLString },
        departureTime: { type: GraphQLDate },
        arrivalTime: { type: GraphQLDate },
        duration: { type: GraphQLInt },
    }
});

export default flightType;