import { Schema, model } from "mongoose"
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  empresa: {
    ref: "Enterprise",
    type: Schema.Types.ObjectId
  },
  roles: [{
    ref: "Role",
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
}
);

userSchema.statics.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(11)
  //console.log(salt);
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePass = async (password, recivedPass) => {
  return await bcrypt.compare(password, recivedPass)
}

export default model('User', userSchema);