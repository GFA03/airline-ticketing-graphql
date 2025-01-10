import { GraphQLObjectType } from 'graphql';
import userQuery from '../queries/userQuery.js';
import usersQuery from '../queries/usersQuery.js';
import flightsQuery from '../queries/flightsQuery.js';
import flightQuery from '../queries/flightQuery.js';
import ticketsQuery from '../queries/ticketsQuery.js';

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,
        flight: flightQuery,
        flights: flightsQuery,
        tickets: ticketsQuery,
    },
});


export default queryType;