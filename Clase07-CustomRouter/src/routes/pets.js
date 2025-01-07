import express from 'express';

var router = express.Router();
const pets = []; //Simular una base de datos de mascotas

router.param('pet',  (req, res, next, petName) => {
    //lógica para este parámetro
    const pet = pets.find( unaMascota => unaMascota.name === petName);
    if(pet){
        req.pet = pet;
        next();
    }else{
        res.status(404).send('Mascota no encontrada');
    }
})

//POST /api/pets -- Crear una mascota {name, specie}
router.post('/', (req, res) => {
    const {name, specie} = req.body;
    if(!name || !specie){
        return res.status(400).send('Nombre y especie son obligatorios');
    }
    const newPet = {name, specie};
    pest.push(newPet);
    res.status(201).send(newPet);
});

//GET /api/pets/:pet - Obtener una mascota por nombre (solo letras y espacio)
router.get('/:pet([a-zA-Z%20]+)', (req, res) => {
    // En req.pet ya esta disponible la mascota
    res.send(req.pet);
});

//PUT /api/pets/:pet - Actualizar el estado de adopción de la mascota
router.put('/:pet', (req, res) => {
    //Cambiar el atributo adopted = true
    req.pet.adopted = true;
    res.send(req.pet);
});


export default router;
