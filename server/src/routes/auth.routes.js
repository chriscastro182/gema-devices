import { Router } from "express"
import { authJwt, verifySignUp } from '../middlewares'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'

router.post('/signin', authCtrl.signIn)

router.post('/signup', [
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicateUser
], authCtrl.signUp)

router.get('/userIdsByToken', [
    authJwt.verifyToken
], authCtrl.userIdsByToken)

router.get('/isAdminByToken', [
    authJwt.verifyToken
], authCtrl.isAdminByToken)

export default router