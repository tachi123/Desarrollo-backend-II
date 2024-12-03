import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import {__dirname} from './utils.js';

const app = express();
const PORT = 8080;
/*
 * Al conectar cookieParser con express, podremos gestionar dentro de nuestras
 * peticiones, elementos correspondientes a cookies.
 */

app.use(cookieParser("CoderSecret"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.render('index');
})


//ENDPOINT relacionados a Cookie

app.get('/setCookie', (req, res) => {
    res.cookie('nombre', 'Juan', {maxAge: 900000}); //Setear la cookie 'nombre'
    res.send('Cookie establecida correctamente.');
})

app.get('/getCookie', (req, res) => {
    console.log('Cookie:', req.cookies); 
    res.send('Cookie recibida!'); 
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('nombre'); // Elimina la cookie 'nombre'
    res.send('Cookie "nombre" eliminada correctamente.');
})

// Ruta para crear una cookie

app.post('/submitCookie', (req, res) => {
    const { nombre, correo } = req.body;
    res.cookie('user', { user: correo }, { maxAge: 10000 });
    res.send('Cookie creada!');
  });

//ENDPOINT relacionados a SignedCookie

app.get('/setSignedCookie', (req, res) => {
    res.cookie('SignedCookie', 'Juan', {maxAge: 900000, signed: true}).send('Cookie establecida correctamente.');
})

app.get('/getSignedCookie', (req, res) => {
    const signedCookieValue = req.signedCookies.SignedCookie; // Obtenemos el valor de la cookie firmada
    if(signedCookieValue) {//Obtenemos el valor de la cookie firmada
        res.send('El valor de la cookie firmada es: ' +signedCookieValue);
    }else{ //Si la cookie ha sido modificada
        res.send('¡La cookie no es válida');
    }
    
})

//Configuración del motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');

//Iniciar el servidor
app.listen(PORT, ()=> {
    console.log("Listening on PORT: "+PORT);
})