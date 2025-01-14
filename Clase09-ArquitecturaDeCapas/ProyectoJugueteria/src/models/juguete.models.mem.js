let juguetes = []; //Array para simular una base de datos

export const obtenerJuguetes = async ()  => {
    return juguetes;
}

export const crearJuguete = async (juguete)  => {
    const nuevoJuguete = { ...juguete, id: juguetes.length + 1}; //Asignar un ID al elemento que voy agregar al array
    juguetes.push(nuevoJuguete);
    return nuevoJuguete;
}

//otras funciones DAO