import contactsModel from './models/contacts.model.js';

/** ABSTRACCIÓN DE LA LÓGICA DE ACCESO A DATOS 
 * GET UPDATE DELETE INSERT
*/
export default class Contacts {

    constructor() {}

    //Sabemos que FIND corresponde a Mongo. Pero nosotros no queremos atar la obtención
    //de la información de contactos a Mongo. Entonces abstraemos en un método llamado get
    get = async () => {
        let contacts = await contactsModel.find();
        return contacts; 
    }

    insert = async (contact) => {
        await contactsModel.create(contact);
        return contact;
    }

    update = async (id, contact) => {
        await contactsModel.findByIdAndUpdate(id, contact, {new : true});
        return contact;
    }

    delete = () => {
        
    }

}