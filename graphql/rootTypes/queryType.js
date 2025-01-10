import { GraphQLObjectType } from 'graphql';
import userQuery from '../queries/userQuery.js';
import usersQuery from '../queries/usersQuery.js';
import flightsQuery from '../queries/flightsQuery.js';
import flightQuery from '../queries/flightQuery.js';
import ticketsQuery from '../queries/ticketsQuery.js';
import ticketQuery from '../queries/ticketQuery.js';
import availableFlightsQuery from '../queries/availableFlightsQuery.js';
import userTicketsQuery from '../queries/userTicketsQuery.js';

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,
        flight: flightQuery,
        flights: flightsQuery,
        availableFlights: availableFlightsQuery,
        ticket: ticketQuery,
        tickets: ticketsQuery,
        userTickets: userTicketsQuery,
    },
});


export default queryType;