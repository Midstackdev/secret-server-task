import User from "../models/user.model.js";

export const create = async(body) => {
    try {
        const user = await User.create({ ...body })
         return user;
    } catch (error) {
        throw error;
    }
}

export const findByEmail = async({ email }) => {
    try {
        const user = await User.findOne({ email })
         return user;
    } catch (error) {
        throw new Error('Unable to find user');
    }
}

export const findById = async({ id }) => {
    try {
        const user = await User.findById(id)
         return user;
    } catch (error) {
        throw new Error('Unable to find user');
    }
}