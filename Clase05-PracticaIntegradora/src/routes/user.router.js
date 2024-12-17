import { Router } from 'express';

const router = Router();

//Endpoint para el register
router.get('/register', (req, res) => {
    res.render('register');
})

//Endpoint para el login
router.get('/login', (req, res) => {
    res.render('login');
})

//Ruta para el usuario actual
router.get('/current', (req, res) => {
    
})

export default router;