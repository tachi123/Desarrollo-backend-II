import express from 'express';
import User from '../models/user.models.js';
import { createHash , isValidPassword } from '../utils.js'

const router = express.Router();

//Registración
router.post('/register', passport.authenticate('register',{failureRedirect:'/failregister'}), async (req,res) => {
    try{
        console.log('User registered');
        res.redirect('/login');
    }catch(error){
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Error al registrar usuario');
    }
})

router.get('/failregister', (req, res) => {
    res.send({ error: 'Failed' });
});

//Iniciar sesión 
router.post('/login', passport.authenticate('login', {failureRedirect: 'failloging'}), async (req,res) => {
    try{
        if(!req.user) //Llego acá, es que el middleware lo supero
            return res.status(400).send({ status: 'error', error: 'Invalid credentials' });
        
        req.session.user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            age: req.user.age,
            email: req.user.email
        };
        //res.send({ status: 'success', payload: req.user });
        res.redirect('/perfil');
    }catch(error){
        console.error('Error al iniciar sesión');
        res.status(500).send('Error al iniciar sesión');
    }

})

router.get('/failloging', (req, res) => {
    res.send({ error: 'Failed Login' });
});

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