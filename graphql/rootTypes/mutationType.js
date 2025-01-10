import graphql from 'graphql';
import createUserMutation from '../mutations/createUserMutation.js';
import updateUserMutation from '../mutations/updateUserMutation.js';
import deleteUserMutation from '../mutations/deleteUserMutation.js';
import loginMutation from '../mutations/loginMutation.js';
import createFlightMutation from '../mutations/createFlightMutation.js';
import deleteFlightMutation from '../mutations/deleteFlightMutation.js';
import updateFlightMutation from '../mutations/updateFlightMutation.js';
import createTicketMutation from '../mutations/createTicketMutation.js';
import deleteTicketMutation from '../mutations/deleteTicketMutation.js';

// Define the Mutation type
const mutationType = new graphql.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        deleteUser: deleteUserMutation,
        login: loginMutation,
        createFlight: createFlightMutation,
        deleteFlight: deleteFlightMutation,
        updateFlight: updateFlightMutation,
        createTicket: createTicketMutation,
        deleteTicket: deleteTicketMutation,
    }
});


export default mutationType;