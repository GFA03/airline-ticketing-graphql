import { GraphQLObjectType } from 'graphql';
import userQuery from '../queries/userQuery.js';
import usersQuery from '../queries/usersQuery.js';
import flightsQuery from '../queries/flightsQuery.js';
import flightQuery from '../queries/flightQuery.js';

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,
        flight: flightQuery,
        flights: flightsQuery,
    },
});


export default queryType;