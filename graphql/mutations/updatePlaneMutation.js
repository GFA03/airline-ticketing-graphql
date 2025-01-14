import { GraphQLNonNull } from 'graphql';
import PlaneType from '../types/planeType.js';
import PlaneInputType from '../types/planeInputType.js';
import db from '../../models/index.js';
const updatePlaneMutationResolver = async (_, { plane }, context) => {
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
    const foundPlane = await db.Plane.findOne({
        where: {
            id,
        }
    });

    if(!foundPlane) {
        return false;
    }
    const newPlane = await db.Plane.update(plane);
    return newPlane;
}
const updatePlaneMutation = {
  type: PlaneType,
  description: 'update a plane',
  args: {
    input: { type: new GraphQLNonNull(PlaneInputType) },
  },
  resolve: updatePlaneMutationResolver,
};

export default updatePlaneMutation;
