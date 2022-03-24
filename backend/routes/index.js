import userRoutes from './user.routes.js'
import secretRoutes from './secret.routes.js'

export const registerRoutes = (app) => {
    app.use('/api/users', userRoutes)
    app.use('/api/secret', secretRoutes)
}