import { httpException } from "../utils/http.exception.js"
import { verifyToken } from "../utils/token.util.js"

const isAuth = (req, res, next) => {
    const authorization  = req.headers.authorization
    if(authorization) {
        const decoded = verifyToken(authorization.slice(7, authorization.length))
        
        if(!decoded) {
            httpException(401, 'Invalid token')
        }else {
            req.user = decoded
            next()
        }
    }else {
        httpException(401, 'Not authenticated')
    }
}

export default isAuth