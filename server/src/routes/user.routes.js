import { Router } from "express"
const router = Router()

import * as userController from "../controllers/user.controller"
import { authJwt, verifySignUp } from '../middlewares'

/* router.get('/',
    [authJwt.verifyToken, authJwt.isLead], 
    userController.getUsers) */
router.get('/', authJwt.verifyToken, userController.getUsers)

router.post('/',
    [authJwt.verifyToken, verifySignUp.checkDuplicateUser,authJwt.isAdmin, authJwt.isLead],
    userController.createUser)

router.get('/:userId', authJwt.verifyToken, userController.getUserById)

router.delete('/:userId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    userController.deleteUser)

router.put('/:userId', 
    [authJwt.verifyToken,authJwt.isAdmin, authJwt.isLead], 
    userController.updateUserById)

export default router 

