import { GraphQLList, GraphQLString } from 'graphql';
import PlaneType from '../types/planeType.js';
import db from '../../models/index.js';

const planeQueryResolver = async(_, { id })=>{
    return await db.Plane.findOne( 
    {where: {
        id,
    }});
}

const planeQuery = {
  type: new GraphQLList(PlaneType),
  args: {
    company: { type: GraphQLString },
  },
  resolve: planeQueryResolver
  
};

export default planeQuery;
