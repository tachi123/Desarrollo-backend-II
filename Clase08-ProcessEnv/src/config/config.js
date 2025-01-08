import dotenv from 'dotenv';
import {Command} from 'commander';

const program = new Command(); //Inicializamos un nuevo comando de commander

program //option(EL COMANDO, DESCRIPCION, VALOR POR DEFAULT)
    .option('--mode <mode>', 'Modo de trabajo', 'prod') //<mode> es el argumento a colocar
    .parse(); //parse se utiliza para cerrar la configuración de comandos

const environment = program.opts().mode;

dotenv.config({
    path: `.env.${environment}`
});

if(process.env.PORT === undefined){
    console.error(`Error al cargar el archivo .env.${mode}:`, error);
    process.exit(1); //Salir con código de error
}

export default{
    port: process.env.PORT,
    dbUrl: process.env.DATABASE_URL,
    dbPassword: process.env.DATABASE_PASSWORD,
    mode: environment
}