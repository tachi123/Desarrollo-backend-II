import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'secretCoder',
    /**
     * Resave permite mantener la sesión activa en caso de que la sesión se mantenga inactiva. Si se deja en false, la sesión morirá en caso de que exista cierto tiempo de inactividad
     */
    resave: true,
    /**
     * saveUninitialized permite guardar cualquier sesión aun cuando el objeto de sesión no tenga nada por contener. Si se deja en false, la sesión no se guardará si el objeto de sesión está vacío al final de la consulta.
     */
    saveUninitialized: true
  }));
  
  //URL DE TEST: http://localhost:8080/login?username=pepe&password=pepepass
app.get('/login', (req, res) =>{
    const {username, password} = req.query;
    if(username === 'pepe' && password === 'pepepass'){
        req.session.user = username;
        req.session.admin = true;
        res.send('login success!');
    }else{
        res.send('login failed!');
    }
});


 app.get('/session', (req, res) =>{
    //Si al conectar la sesión ya existe, encontes aumentar el contador
    if(req.session.counter){
        req.session.counter++;
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`);
    }else{
        // Si no hay aún una sesión para el usuario, entonces inicializar en 1
        req.session.counter = 1;
        res.send('¡Bienvenido!')
    }
 }) ;

 app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (!err) res.send('Logout ok!')
      else res.send({status: 'Logout ERROR', body: err})
    })
  });

  function auth(req, res, next){
    if (req.session?.user === 'pepe' && req.session?.admin) {
        return next();
    }
    return res.status(401).send('error de autorización');
  }

  app.get('/privado', auth, (req, res) => {
    res.send('¡Si estas viendo esto es porque ya te logueasté!')
  });


 //Iniciar el servidor
app.listen(8080, ()=> {
    console.log("Listening on PORT: "+8080);
})