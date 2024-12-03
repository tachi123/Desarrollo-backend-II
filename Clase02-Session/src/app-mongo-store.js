import express from 'express';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { __dirname } from './utils.js';

const mongoURL = 'mongodb://localhost:27017/CoderHouse70310';
const port = 3000;

const app = express();
app.use(cookieParser());

app.use(session({
  store: MongoStore.create({
    mongoUrl: mongoURL,
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    //ttl: 15,
  }),
  secret: 'asd3nc3okasod',
  resave: false,
  saveUninitialized: false
}));

// Define una ruta de ejemplo para el endpoint de login
app.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.send('Ya estás logeado.');
    } else {
        req.session.loggedIn = true;
        res.send('¡Inicio de sesión exitoso!');
    }
});

const server = app.listen(port, ()=> {
    console.log("Listening on PORT "+ port);
});
