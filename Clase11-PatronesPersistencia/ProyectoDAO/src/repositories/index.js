import ProductsDao from '../dao/memory/products.memory.js';
import ContactDao from '../dao/memory/contacts.memory.js';


import ProductsRepository from '../repositories/products.repository.js';
import ContactsRepository from '../repositories/contacts.repository.js';

export const contactService = new ContactsRepository(ProductsDao());
export const productService = new ProductsRepository(ContactDao());
