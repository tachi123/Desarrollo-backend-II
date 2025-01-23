import Contacts from '../dao/memory/contacts.memory.js';

const contactsService = new Contacts();

export const getContacts = async (req, res) =>{
    let result = await contactsService.get();
    res.send({status: "success", payload: result});
}
