import { Router } from 'express';
import passport from 'passport';

const router = Router();

/**
 * Este primer link es el que mandamos a llamar desde el front. Al entrar, pasa por el middleware de passport-github
 * lo cual pedirá autorización para acceder al perfil. En cuanto se pueda acceder al perfil, passport enviará la info
 * hacia el callback especificado
 */
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }) , async (req, res) => {});

/**
 * Este callback TIENE QUE COINCIDIR con el que se tease en tu aplicación de github, éste se encargará de hacer la redirección final a la
 * ventana de home, una vez que el login haya logrado establecer la sesión.
 */
router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), 
    async (req, res) => {
        //Nuestra estrategia nos devolverá el usuario, sólo lo agregamos a nuestro objeto de sesión.
        req.session.user = req.user;
        res.redirect('/');
});

export default router;