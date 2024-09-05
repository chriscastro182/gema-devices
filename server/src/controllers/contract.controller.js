import Contract from "../models/Contract"

export const getContracts = async (req, res) => {

    const contracts = await Contract.find({});

    if (contracts) {
        res.status(200).json(contracts)        
    } else {
        res.status(404).json({message: "No hay contratos"})                
    }
}


export const createContract = async (req, res) => {

    const { folio, user, phone, expiresDate} = req.body

    const newContract = new Contract(
        {
            folio,
            user,
            phone,
            expiresDate
        }
    )

    const contractSaved = await newContract.save()

    console.log(contractSaved);

    res.status(201).json(contractSaved)
}

export const updateContractById = async (req, res) => {
    try {
        const updatedContract = 
            await Contract.findByIdAndUpdate(req.params.contractId, req.body)
    
        res.status(200).json(updatedContract)
        
    } catch (error) {
        res.status(500).json(
            {
                message: "No fue posible actualizar el contrato"
            }
        )        
    }

}

export const deleteContract = async (req, res) => {
    try {
        await Contract.findOneAndDelete({"_id": req.params.contractId})

        res.status(200).json(
            {
                message: "Contrato eliminado"
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: "No fue posible eliminar el contrato"
            }
        )        
    }
}