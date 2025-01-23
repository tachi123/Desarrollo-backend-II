import mongoose from "mongoose";

const { Schema } = mongoose;

//Definir el esquema para el contacto
const contactSchema = new Schema({

});

const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;