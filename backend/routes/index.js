import userRoutes from './user.routes.js'

export const registerRoutes = (app) => {
    app.use('/api/users', userRoutes)
}