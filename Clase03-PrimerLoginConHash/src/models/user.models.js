import mongoose from "mongoose";
const {Schema} = mongoose;

//Definir el esquema para el usuario
const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;