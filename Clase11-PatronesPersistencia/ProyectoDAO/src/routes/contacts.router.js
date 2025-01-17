import { Router } from 'express';

import { contactsService } from '../repositories/index.js';

const router = Router();

router.get('/', async (req, res) =>{
    let result = await contactsService.getContacts();
    res.send({status: "success", payload: result});
});

router.post('/', async (req, res) =>{
    let { name, last_name, phone} = req.body;
    let result = await contactsService.createContact(contact);
    res.send({status: "success", payload: result});
})

router.put('/:id', async (req, res) =>{
    let result = await contactsService.update(req.params.id, req.body);
    res.send({status: "success", payload: result});
})


router.delete('/:id', async (req, res) =>{
    let result = await contactsService.delete(req.params.id);
    res.send({status: "success", payload: result});
})


export default router;