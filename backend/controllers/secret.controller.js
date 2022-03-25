import * as service from '../service/secrect.service.js'
import { hash } from '../utils/crypto.util.js'
import { timeDiffInMins } from '../utils/helper.util.js'
import { httpException } from '../utils/http.exception.js';

const ALLOWED_INTERVAL = 15;

export const create = async(req, res, next) => {
    try {
        const { text } = req.body
        const user = req.user
        const secret = await service.create({ text, user: user.id })

        return res.status(201).json(secret);
    } catch (error) {
        next(error);
    }
}

export const index = async(req, res, next) => {
    try {
        const user = req.user
        const secrets = await service.index({ user: user.id })

        return res.status(200).json(secrets);
    } catch (error) {
        next(error);
    }
}

export const show = async(req, res, next) => {
    try {
        const id = req.params.id
        const secret = await service.show(id)

        return res.status(200).json(secret);
    } catch (error) {
        next(error);
    }
}

export const share = async(req, res, next) => {
    try {
        const id = req.params.id
        const hashItems = {
            id,
            sharedAt: Date.now()
        }
        const hashes = hash(JSON.stringify(hashItems))
        hashItems.hashes = hashes
        const secret = await service.share({id, hashItems})

        return res.status(200).json(hashItems);
    } catch (error) {
        next(error);
    }
}

export const getShared = async(req, res, next) => {
    try {
        const hash = req.params.hash
        const secret = await service.getShared(hash)
        if(!secret) {
            httpException(404, 'Expired link to view secret is not available');
        }

        const shared = secret.shared.find(x => x.hashes === hash)
        if(!shared) {
            httpException(404, 'Expired link to view secret is not available');
        }

        if(!(ALLOWED_INTERVAL >= timeDiffInMins(shared.sharedAt))) {
            await service.unshare({ id: shared.id, hashItems:shared })
            httpException(401, 'Link to view secret is expired');
        }

        return res.status(200).json(secret);
    } catch (error) {
        next(error);
    }
}

export const remove = async(req, res, next) => {
    try {
        const id = req.params.id
        const secret = await service.remove(id)

        return res.status(200).json({ message: 'Deleted successfully'});
    } catch (error) {
        next(error);
    }
}