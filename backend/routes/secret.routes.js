import express from 'express'
import * as controller from '../controllers/secret.controller.js'
import isAuth from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/', isAuth, controller.create)
router.get('/', isAuth, controller.index)
router.get('/:id', isAuth, controller.show)
router.post('/share/:id', isAuth, controller.share)
router.get('/share/:hash', controller.getShared)

export default router