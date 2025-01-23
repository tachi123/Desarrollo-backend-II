import express from 'express';
import usersRouter from './routes/users.router.js';
import businessRouter from './routes/business.router.js';
import ordersRouter from './routes/orders.router.js';
import config from './config/config.js';
import connectDB from './config/db.js';
import cors from 'cors';

const app = express();
const connection = connectDB(config.urlMongo);

app.use(cors()); //{origin:'http://localhost:8080',methods:['GET','POST','PUT']}

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routers
app.use('/api/user', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/order', ordersRouter);

//Variables de entorno
const PORT = config.port;

//Iniciar el servidor
app.listen(PORT, () => {
    console.log("Listening on PORT: ",PORT)
})