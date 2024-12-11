import express from 'express';
import path from 'path';
import { __dirname } from './utils.js';

import viewsRouter from './routes/views.router.js';
import sessionRouter from './routes/session.router.js';

const app = express();
const PRIVATE_KEY = "CoderKeyQueFuncionaComoUnSecret";

//configurar para trabajar con json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);
app.use('/session', sessionRouter);

app.listen(8080, () => console.log('listening on 8080'));