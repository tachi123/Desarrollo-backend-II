import MongoSingleton from './config/mongoSingleton.js';

//Nocrear o instanciar directamente aca, si no justamente hacerlo al obtener una instancia

//No estamos instanciando directamente al constructor, sólo se obtiene la instancia
const mongoInstance = MongoSingleton.getInstance(); //Para la ejecución de la primera vez, si se crea la conexión

//Intentamos de vuelta volver a instancar
const anotherMongoInstance = MongoSingleton.getInstance();
//Mostrar el mensaje: "Already connected"

