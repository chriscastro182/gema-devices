import { ROLES } from "../models/Role"
import User from "../models/User"

export const checkDuplicateUser = async(req, res, next) => {
    const user = await User.findOne({email: req.body.email})

    if(user) return res.status(400).json({message: 'Usuario ya registrado'})

    next()
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Rol ${req.body.roles[i]} no existe`
                })
            }            
        }
    }
    next()
}