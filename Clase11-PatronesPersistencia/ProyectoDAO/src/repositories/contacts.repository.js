import ContactDTO from "../dao/dtos/contacts.dto.js";

export default class ContactRepository{

    constructor(dao){
        //Que acá recibimos cualquier DAO a utilizar y después solo llamamos a los métodos DAO
        this.dao = dao;
    }

    //Abstraemos los métodos para acceder al DAO
    getContacts = async ()  => {
        let result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.insert(contactToInsert);
        return result;
    }


}