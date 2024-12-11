import passport from 'passport';
import local from 'passport-local';
import userService from '../models/User.js';
import { createHash, isValidPassword } from '../utils.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    //Nota que passport utiliza sus propios "middlewares" de acuerdo a cada estrategia
    //Inicializamos la estrategia local
    /*
    * username será en este caso el correo.
    * done será el callback de resolución de passport, el primer argumento es para error y el segundo para el usuario.
    */
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, //passReqToCallback permite que se pueda acceder al objeto req como cualquier otro middleware.
        async (req, email, password, done) => {
            const {first_name, last_name, email, age} = req.body;
            try {
                let user = await UserModel.findOne({ email: email });
                if (user) {
                    //NO encontrar un usuario no significa que sea un error, asi que el error lo pasamos como null, pero al usuario como false
                    //esto significa "No ocurrio un error al buscar el usuario, pero el usuario ya existe y no puedo dejarte continuar" 
                    console.log('User already exists');
                    return done(null, false);
                }
                let newUser = {
                    first_name, 
                    last_name,
                    email, 
                    age,
                    password: createHash(password)
                };
        
                const userCreated = await userService.create(newUser);
                return done(null, userCreated); //Registración exitosa, retorno el usuario en el callback done
            } catch (error) {
                return done(error);
            }
        }
    ));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.desserializeUser( async(id, done) => {
        let user = await userService.findById(id);
        done(null, user.id);
    }); 
    passport.use('login',new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email' }, 
        async (req, email, password, done) => {
            try {
                const user = await userService.findOne({ email: email });
                if(!user){
                    console.log('User doesnt exist');
                    return done(null, false, { message: 'Usuario no encontrado' });
                }

                if(!isValidPassword(user,password)) return done(null, false, { message: 'Contraseña incorrecta' });
                return done(null, user); //Autenticación exitosa, retorno el usuario en el callback done
            } catch (error) {
                return done(error);
            }
        }
    ))

};

export default initializePassport;