import express from 'express';

import dictionaryRouter from './routes/dictionary.router.js';
import petRouter from './routes/pets.js';
import SessionRouter from './routes/session.router.js';
import UserRouter from './routes/user.router.js';

const app = express();

app.use(express.json()); //Middleware para parsear JSON en el body
app.use(express.urlencoded({ extended: true }));

app.use('/api/dictionary', dictionaryRouter);
app.use('/api/pets', petRouter);

//CUSTOM ROUTER
//Al utilizar custom router, tenemos que inicializarlos. Crear instancias de los router
const sessionRouter = new SessionRouter(); //Inicializando el router session
app.use('/api/sessions', sessionRouter);
const userRouter = new UserRouter(); //Inicializando el router user
app.use('/api/user', userRouter);

app.listen(8080, () => 
    console.log('Servidor escuchando en el puerto 8080')
);
