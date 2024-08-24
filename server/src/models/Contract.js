import { Schema, model } from "mongoose"
const typeContractSchema = new Schema({
    name: {
        type: String,
        required: true
      }
});
const contractSchema = new Schema({
    folio: {
      type: String,
      required: true
    },
    /* typeContract: {
      type: typeContractSchema,
      required: true
    }, */    
    device: [{
        ref: "Device",
        type: Schema.Types.ObjectId
    }],
    phone: {
      type: String,
      required: true,
      unique: true
    },
    user: {
      ref: "User",
      type: Schema.Types.ObjectId
    },
    expiresDate: {
        type: Schema.Types.Date,
        required: true,
    }
  },{
    timestamps: true,
    versionKey: false
});

  export default model('Contract', contractSchema);
