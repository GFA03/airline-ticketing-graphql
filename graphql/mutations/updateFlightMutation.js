import graphql from 'graphql';
import flightInputType from '../types/flightInputType.js';
import flightType from '../types/flightType.js';
import db from '../../models/index.js';

const updateFlightMutationResolver = async (_, args) => {
    const id = args.id;

    const flight = await db.Flight.findOne({
        where: {
            id,
        }
    });

    if(!flight) {
        return false;
    }

    const updatedFlight = await flight.update({
        ...args.flight,
    });

    return updatedFlight;
}

const updateFlightMutation = {
    type: flightType,
    args: {
        id: {type: graphql.GraphQLInt},
        flight: {type: flightInputType},
    },
    resolve: updateFlightMutationResolver,
};

export default updateFlightMutation;