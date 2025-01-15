import { GraphQLList, GraphQLInt } from "graphql";
import db from "../../models/index.js";
import CheckedTicketType from "../types/checkedTicketType.js"; 

const checkedTicketsForFlightQueryResolver = async (_, { flightId }) => {
    try {
      // Fetch all checked tickets for the given flightId
      const checkedTickets = await db.CheckedTicket.findAll({

        include: {
          model: db.Ticket, // Include the Ticket model to fetch related ticket details if needed
          attributes: ['id', 'userId'], // Adjust the attributes as needed
          where: { flightId: flightId }, // Find tickets related to the flightId
        },
      });
  
      if (!checkedTickets || checkedTickets.length === 0) {
        throw new Error('No checked tickets found for this flight');
      }
  
      return checkedTickets; // Return the checked tickets for this flight
    } catch (error) {
      console.error('Error fetching checked tickets:', error);
      throw error;
    }
  };
  
  const checkedTicketsForFlightQuery = {
    type: new GraphQLList(CheckedTicketType), // Your custom GraphQL type for CheckedTicket
    args: {
      flightId: { type: GraphQLInt },
    },
    resolve: checkedTicketsForFlightQueryResolver,
  };
  
  export default checkedTicketsForFlightQuery;