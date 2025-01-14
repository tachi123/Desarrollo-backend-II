import mongoose from "mongoose";

const {Schema} = mongoose;

//Definimos el esquema
const jugueteSchema = new Schema({

});

const JugueteModel = mongoose.model('Juguete', jugueteSchema);

export default JugueteModel;