import { GraphQLList, GraphQLInt } from "graphql";
import db from "../../models/index.js";
import CheckedTicketType from "../types/checkedTicketType.js"; 

const checkedTicketsForUserQueryResolver = async (_, {}, context) => {
    try {
        const isAuthorized = !!context.userId
   
        if(!isAuthorized) {
            return false;
        }
    
        const userId = context.userId;
      // Fetch all checked tickets for the given UserId
      const checkedTickets = await db.CheckedTicket.findAll({

        include: {
          model: db.Ticket, // Include the Ticket model to fetch related ticket details if needed
          attributes: ['id', 'userId'], // Adjust the attributes as needed
          where: { userId: userId }, // Find tickets related to the userId
        },
      });
  
      if (!checkedTickets || checkedTickets.length === 0) {
        throw new Error('No checked tickets found for this user');
      }
  
      return checkedTickets; // Return the checked tickets for this user
    } catch (error) {
      console.error('Error fetching checked tickets:', error);
      throw error;
    }
  };
  
  const checkedTicketsForUserQuery = {
    type: new GraphQLList(CheckedTicketType), // Your custom GraphQL type for CheckedTicket
    resolve: checkedTicketsForUserQueryResolver,
  };
  
  export default checkedTicketsForUserQuery;