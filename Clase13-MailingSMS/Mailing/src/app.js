import express from 'express';
import config from './config/config.js';
import mailRouter from './routes/mail.router.js';

const app = express();

//Configurar para trabajar con json
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/mail", mailRouter);


app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${config.PORT}`)
})