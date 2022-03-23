import express from 'express'
import * as controller from '../controllers/user.controller.js'
import isAuth from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/me', isAuth, controller.me)

export default router