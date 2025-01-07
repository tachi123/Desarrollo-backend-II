import Router from './js/router.js';

export default class UserRouter extends Router{
    init(){
        //Acá inicializamos las rutas

        //router.get
        this.get('/', ["PUBLIC"], (req, res) => {
            res.sendSuccess('Hola, Coders!');
        });

        this.get('/currentUser', ["USER", "USER_PREMIUM"], (req, res) => {
            res.sendSuccess(req.user);
        });

    }
}
