import express from 'express';
import smsRouter from './routes/sms.router.js';

const PORT = 3000;
const app = express();

app.use('/api/sms', smsRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})