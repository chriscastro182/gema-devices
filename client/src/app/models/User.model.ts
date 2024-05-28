import { Rol } from "./Rol.model";

export interface User{
    _id?:string;
    name:string;
    lastname:string;
    email:string;
    password?:string;
    createdAt?:string;
    updatedAt?:string;
    roles:[Rol];
}