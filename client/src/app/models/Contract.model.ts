import { Device } from "./Device.model";

export interface Contract {
    _id?: string,
    folio: string,
    phone: string,
    expiresDate: string | Date,
    user: string,
    device:[Device?],
    createdAt?: Date,
    updatedAt?: Date,
}