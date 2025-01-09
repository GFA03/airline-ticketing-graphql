import {GraphQLInt} from 'graphql';
import flightType from '../types/flightType.js';
import db from '../../models/index.js';

const flightQueryResolver = async (_, { id }) => {
    const flight = await db.Flight.findOne({
        where: {
            id,
        }
    });

    if(!flight) {
        return null;
    }

    return flight;
}

const flightQuery = {
    type: flightType,
    args: {
        id: { type: GraphQLInt },
    },
    resolve: flightQueryResolver,
};

export default flightQuery;