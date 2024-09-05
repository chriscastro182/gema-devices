import { Router } from "express"
const router = Router()

import * as contractController from "../controllers/contract.controller"


router.get('/', contractController.getContracts)

router.post('/', contractController.createContract)

router.put('/:contractId', contractController.updateContractById)

router.delete('/:contractId', contractController.deleteContract)

export default router 