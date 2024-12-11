import { Router}  from 'express';
import  { isLoggedIn, isLoggedOut} from '../middlewares/auth.js';

const router = Router();

router.get('/login', isLoggedOut, (req, res) => {
    res.render('login');
})

router.get('/register', isLoggedOut, (req, res) => {
    res.render('register');
})

router.get('/restore-password', isLoggedOut, (req, res) => {
    res.render('restaurar');
})

router.get('/perfil', isLoggedIn, (req, res) => {
    res.render('perfil',{
        user: {
            first_name: req.session.user.first_name,
            last_name: req.session.user.last_name,
            email: req.session.user.email,
            age: req.session.user.age
        }
    });
})

export default router;