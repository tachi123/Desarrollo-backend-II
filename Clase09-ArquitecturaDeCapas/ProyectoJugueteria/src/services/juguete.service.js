import * as jugueteDAO from '../models/juguete.models.mem.js';

export const obtenerJuguetes = async () => {
    return await jugueteDAO.obtenerJuguetes();
};

export const crearJuguete = async (juguete) => {
    return await jugueteDAO.crearJuguete(juguete);
};