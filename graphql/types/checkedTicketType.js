import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
  } from "graphql";
  import db from "../../models/index.js";
  import { GraphQLDate } from "graphql-compose";
import ticketType from "./ticketType.js";
  
  const checkedTicketType = new GraphQLObjectType({
    name: "CheckedTicket",
    fields: {
      id: {type: GraphQLInt},
      ticket: {
        type: ticketType,
        resolve: async (checkedTicket) => {
          const ticket = await db.Ticket.findOne({
            where: {
              id: checkedTicket.ticketId,
            },
          });
  
          return ticket;
        },
      },
      row: {type: GraphQLInt},
      seat: {type: GraphQLString},
      createdAt: { type: GraphQLDate },
    },
  });
  
  export default checkedTicketType;
  