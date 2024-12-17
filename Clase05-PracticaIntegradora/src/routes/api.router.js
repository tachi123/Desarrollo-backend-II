import { Router } from 'express';
import UserService from '../models/user.model.js';
import { isValidPassword, generateToken } from '../utils.js';

const router = Router();

//Registro de usuario
router.post('/register', async (req, res) => {
    try{
        const newUser = new UserService(req.body); //Creo un nuevo usuario a partir de los datos del formulario de registración
        await newUser.save(); //Guardamos el usuario en la base de datos
        res.status(201).json({message: 'Usuario registrado exitosamente'});
    }catch(error){
        res.status(400).json({error: error.message}); //Manejamos errores durante el proceso de registración
    }
})

//Login
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body; //Desestructuración del req.body
        const user = UserService.findOne({ email: email}); //Buscamos el usuario por email
        if(!user){
            return res.status(400).json({error: 'Usuario no encontrado'}); //Error buscando usuario por email - el usuario no existe
        }
        //Tenemos que validar la contraseña ingresada en el formulario de login con el hash guardado en la base de datos
        if(!isValidPassword(user, password)){
            return res.status(400).json({error: 'Credenciales inválidas'}); //El hash de la contraseña ingresada no coincide con la almacenada en la base de datos
        }
        //Generar un token y almacenarlo en una cookie
        //const jwt_token = generateToken({userId: user._id, role: user.role}); //Generamos un JWT con la información del usuario
        const jwt_token = generateToken({user: user});
        res.cookie('currentUser', jwt_token, { httpOnly: true}); //Almacenamos el token en una cookie HTTP-Only

        res.json({message: 'Inicio de sesión exitoso'});
    }catch(error){
        res.status(500).json({error: error.message}); //Manejamos errores durante el proceso de login
    }
})

export default router;