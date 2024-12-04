import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStore from 'session-file-store';

// Nota cómo conectamos session con lo que será nuestro FileStore.
const fileStorage = FileStore(session);
const port = 3000;

const app = express();
app.use(cookieParser());

app.use(session({
  // ttl = Time To Live. Vida de la sesión
  // retries = Tiempo de veces que el servidor tratará de leer el archivo 
  // path = ruta donde vivirá la carpeta para almacenar las sesiones. 
  store: new fileStorage({ path: './sessions', ttl: 100, retries: 0 }),
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


   