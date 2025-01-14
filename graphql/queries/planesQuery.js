import { GraphQLList, GraphQLString } from 'graphql';
import PlaneType from '../types/planeType.js';
import db from '../../models/index.js';

const planesQueryResolver = async()=>{
    return await db.Plane.findAll();
}

const planesQuery = {
  type: new GraphQLList(PlaneType),
  description: 'Fetch all planes',
  args: {
    company: { type: GraphQLString },
  },
  resolve: planesQueryResolver
  
};

export default planesQuery;
