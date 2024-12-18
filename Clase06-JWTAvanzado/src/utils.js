import passport from 'passport';
import {fileURLToPath} from 'url';
import { dirname } from 'path';

export const passportCall = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        return res.status(401).send({ error: info.messages ? info.messages : info.toString() });
      }
      req.user = user;
      next();
    })(req, res, next);
  };
};

export const authorization = (role) => {
  return async (req, res, next) => {
      if(!req.user) return res.status(401).send({ message: 'Unauthorized' });
      if(req.user.role != role) 
          return res.status(403).send({ error: "No permissions" });
      next();
  }
};

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename)