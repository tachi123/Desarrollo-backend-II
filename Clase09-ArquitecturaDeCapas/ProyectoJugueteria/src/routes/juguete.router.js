import {Router} from 'express';
import * as jugueteController from '../controllers/juguete.controller.js'; //Importo TODAS las funciones del controlador

const router = Router();

//Obtener juguetes
router.get('/', jugueteController.obtenerJuguetes);

//Crear juguetes
router.post('/', jugueteController.crearJuguete);

//MASSSS rutas para juguetes

export default router;