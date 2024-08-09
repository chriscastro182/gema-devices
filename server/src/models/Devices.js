import { Schema, model } from "mongoose"
const deviceSchema = new Schema({
    macAdress: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export default model('Device', deviceSchema);