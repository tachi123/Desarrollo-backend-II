import { Router}  from 'express';
import { __dirname, passportCall, authorization } from '../utils.js';
import path from 'path';

const router = Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vista_registro.html')); // Envía un archivo HTML
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vista_login.html')); // Envía un archivo HTML
});

router.get('/', (req, res) => {
    if (req.user) { // Si hay un usuario en la sesión 
        res.send(`<h1>Bienvenido, ${req.user.name}!</h1>`); // Envía una vista simple (no un motor de plantillas)
    } else {
        res.redirect('/login'); 
    }
});

router.get('/current', passportCall('jwt'), authorization("user") , (req, res) => {
     res.send({ status: 'success', payload: req.user });
});    

router.get('/admin', passportCall('jwt'), authorization("admin") , (req, res) => {
    res.send({ status: 'success', payload: req.user });
});    

export default router;