import { Router}  from 'express';
import { authToken, __dirname } from '../utils.js';
import path from 'path';

const router = Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vista_registro.html')); // Envía un archivo HTML
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vista_login.html')); // Envía un archivo HTML
});

router.get('/', authToken, (req, res) => {
    if (req.user) { // Si hay un usuario en la sesión 
        res.send(`<h1>Bienvenido, ${req.user.name}!</h1>`); // Envía una vista simple (no un motor de plantillas)
    } else {
        res.redirect('/login'); 
    }
});

router.get('/current', authToken, (req, res) => {
    //En postman probar agregando headers con key: 'Authorization': 'Bearer ' + token
    //Ya que usamos authToken, sabemos que tenemos que tener un objeto user en nuestro request. de otra manera el middleware devolvería el error.
    res.send({ status: 'success', payload: req.user });
});    

export default router;