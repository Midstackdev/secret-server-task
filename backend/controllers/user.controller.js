import * as service from '../service/user.service.js'
import { httpException } from '../utils/http.exception.js';
import { signToken } from '../utils/token.util.js';

export const register = async(req, res, next) => {
    try {
        const { email, name, password } = req.body
        const user = await service.create({ email, name, password })
        const accessToken = signToken(user);

        return res.status(201).json({accessToken});
    } catch (error) {
        next(error);
    }
}

export const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await service.findByEmail({ email })
        if(!user) {
            httpException(404, 'Invalid username/email');
        }
        if(!await user.isValidPassword(password)) {
            httpException(401, 'Invalid username/email');
        }
        const accessToken = signToken(user);

        return res.status(200).json({accessToken});
    } catch (error) {
        next(error);
    }
}

export const me = async(req, res, next) => {
    try {
        const { id, email } = req.user
        const user = await service.findById({ id })
        if(!user) {
            httpException(401, 'Unathenticated');
        }
        const {password, ...rest} = user._doc;

        return res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}