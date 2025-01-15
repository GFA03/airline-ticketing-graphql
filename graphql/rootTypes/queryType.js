import { GraphQLObjectType } from 'graphql';
import userQuery from '../queries/userQuery.js';
import usersQuery from '../queries/usersQuery.js';
import flightsQuery from '../queries/flightsQuery.js';
import flightQuery from '../queries/flightQuery.js';
import ticketsQuery from '../queries/ticketsQuery.js';
import ticketQuery from '../queries/ticketQuery.js';
import availableFlightsQuery from '../queries/availableFlightsQuery.js';
import userTicketsQuery from '../queries/userTicketsQuery.js';
import planeQuery from '../queries/planeQuery.js';
import planesByAirlineQuery from '../queries/planesByAirlineQuery.js';
import planesQuery from '../queries/planesQuery.js';
import checkedTicketsQuery from '../queries/checkedTicketsQuery.js';
import checkedTicketQuery from '../queries/checkedTicketQuery.js';
import availableSeatsForFlightQuery from '../queries/availableSeatsquery.js';
import checkedTicketsForFlightQuery from '../queries/checkedTicketsForAFlight.js';
import checkedTicketsForUserQuery from '../queries/checkedTicketUser.js';
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
        plane: planeQuery,
        planes: planesQuery,
        planesByAirline: planesByAirlineQuery,
        checkedTicket: checkedTicketQuery,
        checkedTickets: checkedTicketsQuery,
        availableSeatsForFlight: availableSeatsForFlightQuery,
        checkedTicketsForFlight: checkedTicketsForFlightQuery,
        checkedTicketsForUser: checkedTicketsForUserQuery

    },
});


export default queryType;