import userInputType from '../types/userInputType.js';
import db from '../../models/index.js';
import userType from '../types/userType.js';
import bcrypt from 'bcrypt';

const createUserMutationResolver = async (_, { user }, context) => {
    const password = await bcrypt.hash(user.password, 5);
    let role = user.role
    if (role!=="admin"){
        role = "user";
    }
    const createdUser = await db.User.create({
        name: user.name,
        password: password,
        role: role
    });

    return createdUser;
}

const createUserMutation = {
    type: userType,
    args: {
        user: {type: userInputType},
    },
    resolve: createUserMutationResolver,
};

export default createUserMutation;