import MongoSingleton from "./MongoSingleton.js";

const mongoInstance = MongoSingleton.getInstance(); //Mostrará el mensaje: "connected"

//Se intenta volver a instanciar
const anotherMongoInstance = MongoSingleton.getInstance(); //Mostrará el mensaje: "Already connected"