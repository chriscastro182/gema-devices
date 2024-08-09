import { Router } from "express"
const router = Router()

import * as contractController from "../controllers/contract.controller"


router.get('/', contractController.getContracts)

router.post('/', contractController.createContract)

export default router 