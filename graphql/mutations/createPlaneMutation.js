import PlaneType from '../types/planeType.js';
import PlaneInputType from '../types/planeInputType.js';
import db from '../../models/index.js';
const createPlaneMutationResolver = async (_, { plane }, context) => {
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
    const newPlane = await db.Plane.create(plane);
    return newPlane;
}
const createPlaneMutation = {
  type: PlaneType,
  description: 'Create a new plane',
  args: {
    plane: { type: PlaneInputType },
  },
  resolve: createPlaneMutationResolver,
};

export default createPlaneMutation;
