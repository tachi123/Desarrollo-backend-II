import express from 'express';

//Importo los routers
import jugueteRouter from './routes/juguete.router.js';

const app = express();
const PORT = 3000;

app.use(express.json()); //Middleware para parsear JSON

app.use('/juguetes', jugueteRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)    
})