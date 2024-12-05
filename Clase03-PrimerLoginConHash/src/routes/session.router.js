import express from 'express';
import User from '../models/user.models.js';
import { createHash , isValidPassword } from '../utils.js'

const router = express.Router();

//Registración
router.post('/register', async (req,res) => {
    try{
        const {first_name, last_name, email, age, password} = req.body;

        if (!first_name || !last_name || !email || !age) 
            return res.status(400).send({ status: false, message: 'All fields are required' });

            let newUser = new User({
                first_name, 
                last_name,
                email, 
                age,
                password: createHash(password)
            });

        await newUser.save();
        res.redirect('/login');
    }catch(error){
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Error al registrar usuario');
    }
})

//Iniciar sesión 
router.post('/login', async (req,res) => {
    try{
        const { email, password } = req.body;
        if (!email || !password) 
            return res.status(400).send({ status: "error", message: 'Incomplete values'});

        //No es necesario preguntar por el password desde la base de datos
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).send('Usuario no encontrado');
        }

        if(!isValidPassword(user,password)){
            return res.status(403).send({ status: "error", message: 'Incorrect password'});
        }
        req.session.user = user;
        res.redirect('/perfil');
    }catch(error){
        console.error('Error al iniciar sesión');
        res.status(500).send('Error al iniciar sesión');
    }

})

//Restaurar contraseña
router.post('/restore-password', async (req, res) => {
    const {email, newPassword} = req.body;
    try{
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send({ status: 'error', message: 'User not found' });
        }

        user.password = createHash(newPassword);
        await user.save();

        return res.redirect('/login'); // Redirige a la vista de login

    }catch (error) {
        return res.status(500).send({ status: 'error', message: 'Internal server error' });
    }
})


//Cerrar sesión del usuario
router.post('/logout', (req, res) => {
    req.session.destroy( (error) => {
        if(error){
            console.error('Error al cerrar sesión');
            res.status(500).send('Error al cerrar sesión');
        } else{
            res.redirect('/login');
        }
    })
})

export default router;