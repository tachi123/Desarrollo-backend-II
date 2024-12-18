import { Router}  from 'express';
import jwt from 'jsonwebtoken';

const users = []; //De momento se optará por una persistencia en memoria.

const router = Router();

/* {
        "name": "nahuel",
        "email": "example@gmail.com",
        "password" : "password"
} */
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

//Login enviando JWT en cookie
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if(email === "coder@coder.com" && password === "password"){
        let token = jwt.sign( {email, role:"user"}, "coderSecret", { expiresIn : "24h"});
        res.cookie('tokenCookie', token, {httpOnly: true, maxAge:60*60*1000 }).send({message : "Login exitoso"});

    }else{
        res.status(401).send({message : "Credenciales inválidas"});
    }
});
//Login enviando JWT en la respuesta
router.post('/loginLocalStorage', (req, res) => {
    const { email, password } = req.body;
    if(email === "coder@coder.com" && password === "password"){
        let token = jwt.sign( {email, role:"user"}, "coderSecret", { expiresIn : "24h"});
        res.send({message : "Login exitoso", token: token});
    }else{
        res.status(401).send({message : "Credenciales inválidas"});
    }
});

export default router;