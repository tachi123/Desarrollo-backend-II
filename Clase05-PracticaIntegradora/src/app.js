import express from 'express';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import { __dirname } from './utils.js';
import dotenv from 'dotenv'; //Poder utilizar variables de entorno

//Importamos los routers
import userRouter from './routes/user.router.js';
import apiRouter from './routes/api.router.js';

const app = express();

//Gestionar variables de entorno
dotenv.config(); //nos va a permitir trabajar con las variables de entorno del archivo .env
const firmaCookie = process.env.FIRMA_COOKIE || 'firmaCookie';
const uriMongo = process.env.URI_MONGO || 'urlMONGO';
const PORT = process.env.PORT || '8080';


//Configuración de Express
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(firmaCookie)); //Agregamos una firma a las cookies
app.use(express.static( __dirname + '/public')); //Cargar la carpeta 'public'


//Configuración del motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');

//Rutas base para vistas y API
app.use('/', userRouter);
app.use('/api', apiRouter);

//Configuramos y conectamos a la base de datos
mongoose.connect(uriMongo)
    .then( 
        () =>
            //Iniciar servidor
            app.listen(PORT, ()=> {
                console.log("Listening on PORT: "+PORT);
            }))
    .catch((error) => console.error('Error en conexion:', error))
;

