import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://www.coderhouse.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); //Middleware CORS sin configuracion inicial ACEPTAMOS CUALQUIER origen

app.get('/test', (req, res) => {
    res.send({ message: 'Respuesta'});
})

app.listen(3000, () => console.log('listening'));