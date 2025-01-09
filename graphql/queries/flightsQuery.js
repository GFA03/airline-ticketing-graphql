import { GraphQLList } from 'graphql';
import flightType from '../types/flightType.js';
import db from '../../models/index.js';

const flightsQueryResolver = async () => {
    const flights = await db.Flight.findAll();

    return flights;
}

const flightsQuery = {
    type: new GraphQLList(flightType),
    resolve: flightsQueryResolver,
};

export default flightsQuery;