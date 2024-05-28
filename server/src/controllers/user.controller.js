import User from "../models/User"
import Role from "../models/Role"

export const createUser = async (req, res) => {

    const { name, lastname, password, email, empresa, roles } = req.body
    const newUser = new User(
        {
            name,
            lastname,
            password: await User.encryptPass(password),
            email,
            empresa,
            roles
        }
    )
    if (roles) {
        const foundRoles = await Role.find({ rol: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
        console.log(foundRoles);
    } else {
        const role = await Role.findOne({ rol: "user" })
        newUser.roles = [role._id]
        console.log(role._id);
    }

    const userSaved = await newUser.save()
    console.log(userSaved);

    res.status(201).json(userSaved)
}

export const getUsers = async (req, res) => {

    const users = await User.find({}, { password: 0 }).populate("roles");


    res.status(200).json(users)
}


export const getUserById = async (req, res) => {

    const user = await User.findById(req.params.userId, {password: 0}).populate("roles")

    console.log(user);
    res.json(user)
}

export const deleteUser = async (req, res) => {

    await User.findOneAndDelete({"_id": req.params.userId})

    res.status(204).json()
}


export const updateUserById = async (req, res) => {
    req.body.password =  await User.encryptPass(req.body.password)
    
    const updatedUser = await User.findByIdAndUpdate(req.params.userId,
        req.body,
        {
            new: true
        })

    res.status(200).json(updatedUser)
}