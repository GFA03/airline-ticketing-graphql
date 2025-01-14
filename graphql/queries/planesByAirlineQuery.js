import { GraphQLList, GraphQLString } from 'graphql';
import PlaneType from '../types/planeType.js';
import db from '../../models/index.js';

const planesByAirlineQueryResolver = async(_, {airline})=>{
    return await db.Plane.findAll({
        where: { airline },
      });
}

const planesByAirlineQuery = {
  type: new GraphQLList(PlaneType),
  description: 'Fetch all planes belonging to a specific airline',
  args: {
    airline: { type: GraphQLString },
  },
  resolve: planesByAirlineQueryResolver
  
};

export default planesByAirlineQuery;
