import {GraphQLBoolean, GraphQLInt} from 'graphql';
import db from '../../models/index.js';

const deleteFlightResolver = async (_, args, context) => {
    const isAuthorized = !!context.userId
   
    if(!isAuthorized) {
        return false;
    }

    const flight = await db.Flight.findOne({
        where: {
            id: args.id,
        }
    })

    if (!flight) {
        return false;
    }

    await flight.destroy();
    return true;
}

const deleteFlightMutation = {
    type: GraphQLBoolean,
    args: {
        id: {type: GraphQLInt},
    },
    resolve: deleteFlightResolver,
};

export default deleteFlightMutation;