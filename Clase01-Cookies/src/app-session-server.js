import express from 'express';
import session from 'express-session';

const app = express();
const port = 3000; 
app.use(session({
    secret: 'secretCoder',
    resave: false,
    saveUninitialized: false
}));



app.get('/', (req, res) =>{
    if(!req.session.visits && req.session.visits!=0){
        // Ingresa por privmera vez
        console.log(req.session.visits);
        req.session.visits = 0;
        const nombre = req.query.nombre;
        if (nombre) {
            req.session.nombre = nombre;
            res.send(`Bienvenido ${nombre}`);
          } else {
            res.send('Te damos la bienvenida');
          }
    }else{
        // Ya ingreso al sitio
        req.session.visits++;
        const nombre = req.session.nombre;
        if (nombre) {
            res.send(`${nombre} visitaste la página ${req.session.visits} veces`);
        } else {
            res.send(`Visitaste la página ${req.session.visits} veces`);
        }
    }
 }) ;



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
