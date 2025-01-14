import * as jugueteService from '../services/juguete.service.js';

export const obtenerJuguetes = async (req, res) => {
    try{
        //CONTROLADOR - CAPA SERVICIO - CAPA DE PERSISTENCIA
        const juguetes = await jugueteService.obtenerJuguetes(); //Le pido a la capa servicio los juguetes
        //Transformaciones o modificaciones que querramos sobre los datos
        res.json(juguetes);
    }catch(error){
        res.status(500).json({error: error.message}); //Manejo de errores
    }
}
export const crearJuguete = async (req, res) => {
    try{
        //VALIDO QUE TENGA LOS CAMPOS NECESARIOS PARA CREAR JUGUETE
        const nuevoJuguete = await jugueteService.crearJuguete(req.body); 
        res.status(201).json(nuevoJuguete);
    }catch(error){
        res.status(500).json({error: error.message}); //Manejo de errores
    }
}