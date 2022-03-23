import jwt from "jsonwebtoken"

export const signToken = (user) => {
    return jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
    }, process.env.JWT_SECRET || 'somesuperlongsecret', {
        expiresIn: '30d'
    })
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || 'somesuperlongsecret')
    } catch (error) {
        return null
    }
}