import Secret from "../models/secret.model.js";

export const create = async(body) => {
    try {
        const secret = await Secret.create({ ...body })
         return secret;
    } catch (error) {
        throw error;
    }
}

export const index = async(user) => {
    try {
        const secrets = await Secret.find({ ...user }).populate('user', ['name', 'createdAt']).exec()
         return secrets;
    } catch (error) {
        throw error;
    }
}

export const show = async(id) => {
    try {
        const secret = await Secret.findById(id).populate('user', ['name', 'createdAt']).exec()
         return secret;
    } catch (error) {
        throw error;
    }
}

export const share = async(values) => {
    try {
        const secret = await Secret.findOneAndUpdate(
            { _id: values.id },
            { $push: { shared: values.hashItems }},
            { upsert: true }
        ).exec()
        return secret;
    } catch (error) {
        throw error;
    }
}

export const unshare = async(values) => {
    try {
        const secret = await Secret.findOneAndUpdate(
            { _id: values.id },
            { $pull: { shared: values.hashItems }},
            { upsert: true }
        ).exec()
        return secret;
    } catch (error) {
        throw error;
    }
}

export const getShared = async(hash) => {
    try {
        const secret = await Secret.findOne(
            { "shared.hashes": hash },
        ).populate('user', ['name', 'createdAt']).exec()
        return secret;
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) => {
    try {
        const secret = await Secret.findByIdAndDelete(id)
         return secret;
    } catch (error) {
        throw error;
    }
}