import Router from './js/router.js';
import jwt from 'jsonwebtoken';

export default class SessionRouter extends Router{
    init(){
        this.post('/login', ["PUBLIC"], (req, res) => {
            const { email, password } = req.body;
            if(email === "coder@coder.com" && password === "password"){
                let user = {
                    email: email,
                    role: 'USER'
                } 
                let token = jwt.sign( user, "coderSecret", { expiresIn : "24h"});
                res.sendSuccess(token);
            }else{
                res.sendUserError("Credenciales inválidas");
            }
        });
    }
}




