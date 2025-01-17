import express from 'express';
import contactsRouter from './routes/contacts.router.js';
import Contacts from '../dao/memory/contacts.memory.js';

const app = express;

app.use('/contacts', contactsRouter);

const server = app.listen(8080, () => console.log("Listening on 8080"));

const contactsService = new Contacts();
contactsService.insert({id: 1, nombre: 'Usuario 1', email: "example@example.com"});
contactsService.insert({id: 2, nombre: 'Usuario 2', email: "example1@example.com"});