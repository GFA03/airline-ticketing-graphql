import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import userType from "./userType.js";
import flightType from "./flightType.js";
import db from "../../models/index.js";

const ticketType = new GraphQLObjectType({
  name: "Ticket",
  fields: {
    buyer: {
      type: userType,
      resolve: async (ticket) => {
        const user = await db.User.findOne({
          where: {
            id: ticket.userId,
          },
        });

        return user;
      },
    },
    flight: {
      type: flightType,
      resolve: async (ticket) => {
        const flight = await db.Flight.findOne({
          where: {
            id: ticket.flightId,
          },
        });

        return flight;
      },
    },
  },
});

export default ticketType;
