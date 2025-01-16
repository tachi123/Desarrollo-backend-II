import { Router } from 'express';
//import Contacts from '../dao/mongo/contacts.mongo.js';
import Contacts from '../dao/memory/contacts.memory.js';

const router = Router();
const contactsService = new Contacts();

router.get('/', async (req, res) =>{
    let result = await contactsService.get();
    res.send({status: "success", payload: result});
})

export default router;