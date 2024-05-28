import Role from "../models/Role"

export const createRoles = async () => {

    try {
        
        const count = await Role.estimatedDocumentCount()
    
        if (count > 0) return;
    
        const values = await Promise.all([
            new Role({rol: 'admin'}).save(),
            new Role({rol: 'lead'}).save(),
            new Role({rol: 'user'}).save()
        ])
    
        console.log(values);
        
    } catch (error) {
        console.error(error);
    }
}