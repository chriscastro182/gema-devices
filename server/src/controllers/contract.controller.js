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