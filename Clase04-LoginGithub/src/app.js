import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import initializePassport from './config/passport.config.js';

import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';

const app = express();

const connection = mongoose.connect('mongodb://localhost:27017/Coderhouse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Configuro middleware express-session
app.use(session({
    secret: 'asd3nc3okasod',
    resave: false,
    saveUninitialized: false
}));


//Configuramos el motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Configuramos passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session({
    secret: "CoderSecrets"
}));

app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);

const server = app.listen(3000, ()=> {
    console.log("Listening on PORT 3000")
});