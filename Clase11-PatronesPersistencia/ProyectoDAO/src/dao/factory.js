import config from '../config.js';
import mongoose from 'mongoose';

let persistence;

switch(config.persistence){
    case 'MEMORY':
        const { default: ContactsMemory } = await import('./memory/contacts.memory.js');
        persistence = new ContactsMemory();
    break;
    case 'MONGO':
        const connection = mongoose.connect(config.urlMongo);
        const { default: ContactsMongo } = await import('./memory/contacts.mongo.js');
        persistence = new ContactsMongo();
    break;
    //Otros para FILE, etc
    default:
        throw new Error("Persistencia no soportada");
}

export default persistence;