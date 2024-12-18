import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookieExtractor = (req) =>  {
    let token = null;
    if(req && req.cookies){
        token = req.cookies['tokenCookie'];
    }
    return token;
}

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret'
    }, async(jwt_payload, done) => {
        try{
            return done(null, jwt_payload);
        } catch(error){
            done(error)
        }
    }
))

};


export default initializePassport;