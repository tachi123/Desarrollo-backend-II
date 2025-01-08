import express from 'express';
import config from './config/config.js';
const app = express();

//console.log(config);
const port = config.port;

const ERROR_FILE_NOT_FOUND = 101;
const ERROR_DATABASE_CONNECTION = 100;
const ERROR_INVALID_PARAMETER = -4;

//Listeners
process.on('exit', (code)  => {

    if(code === 0){
        console.log("Proceso finalizo correctamente");
    } else{
        console.log(`Proceso finalizando con código: ${code}`); 
    }
    //Limpieza (cerrar conexiones, etc).
})

process.on('uncaughtException', exception => {
    console.log('Este código atrabapa todas las excepciones no controladas')
    
    if(exception.message.startsWith('Error de conexión a la base de datos')){
        process.exit(ERROR_DATABASE_CONNECTION);
    }else if(exception.message.startsWith('Archivo no encontrado')){
        process.exit(ERROR_FILE_NOT_FOUND);
    }else{
        console.log(`¡Error no capturado: ${exception}!`);
        process.exit(1);
    }
    //Logueamos el error, para intenter recuperar parcialmente la aplicación
    //cerrar la aplicación
    process.exit(1); //Salir con un código de error indicando fallo
})

process.on('message',  message => {
    console.log(`Este código se ejecutará cuando reciba un mensaje de otro proceso`);
})

function listNumbers(...numbers){
    //Filtrar y quedarme con elementos no numéricos
    const invalidParameters = numbers.filter(unNum => typeof unNum !== 'number');
    if(invalidParameters.length > 0){
        const types = invalidParameters.map( elemNoNumerico => typeof elemNoNumerico);
        console.log('Invalid parameters', types);
        process.exit(ERROR_INVALID_PARAMETER); //Uso un código de salida personalizado
    }
    console.log('Números válidos: ',numbers);
}

listNumbers(1,2,3,4,5); //Salida: [1,2,3,4,5] (Proceso finalizado correctamente)
listNumbers(1,2,'a',true,5); //Salida: invalidParameters (Proceso finalizado con código de error personalziado)


