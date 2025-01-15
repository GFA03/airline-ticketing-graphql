import flightInputType from '../types/flightInputType.js';
import db from '../../models/index.js';
import flightType from '../types/flightType.js';

const createFlightMutationResolver = async (_, { flight }, context) => {
    const isAuthorized = !!context.userId
    
    const user = await db.User.findOne({
        where: {
            id:context.userId,
        }
    });

    if(!isAuthorized) {
        return false;
    }
    if(user.role !== "admin"){
        return false;
    }
    console.log("AAAA");
    const createdFlight = await db.Flight.create({
        airline: flight.airline,
        planeId: flight.planeId,
        departure: flight.departure,
        arrival: flight.arrival,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        duration: flight.duration,
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