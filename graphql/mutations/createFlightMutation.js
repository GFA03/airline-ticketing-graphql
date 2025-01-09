import flightInputType from '../types/flightInputType.js';
import db from '../../models/index.js';
import flightType from '../types/flightType.js';

const createFlightMutationResolver = async (_, { flight }, context) => {

    const createdFlight = await db.Flight.create({
        airline: flight.airline,
        departure: flight.departure,
        arrival: flight.arrival,
        departure_time: flight.departure_time,
        arrival_time: flight.arrival_time,
        duration: flight.duration,
        total_seats: flight.total_seats,
    })

    return createdFlight;
}

const createFlightMutation = {
    type: flightType,
    args: {
        flight: {type: flightInputType},
    },
    resolve: createFlightMutationResolver,
};

export default createFlightMutation;