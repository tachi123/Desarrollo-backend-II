import { Router}  from 'express';
import { generateToken } from '../utils.js';

const users = []; //De momento se optará por una persistencia en memoria.

const router = Router();

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const exists = users.find(user => user.email === email);
    if (exists) 
        return res.status(406).send({ status: 'error', error: 'User already exists' });
    const user = {
        name,
        email,
        password
    };
    users.push(user);

    //Generamos un token con el usuario.
    const access_token = generateToken(user);
    res.send({ status: 'success', access_token });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) return res.status(408).send({ status: 'error', error: 'Invalid credentials' });
    //Generamos un token con el usuario.
    const access_token = generateToken(user);
    res.send({ status: 'success', access_token });
});

export default router;