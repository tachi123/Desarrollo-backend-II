import jwt from 'jsonwebtoken';
import {fileURLToPath} from 'url';
import { dirname } from 'path';

/**
 * Una private key sirve para utilizarse al momento de hacer el cifrado del token.
 */
const PRIVATE_KEY = "CoderKeyQueFuncionaComoUnSecret";

 
/**
 * generateToken: al utilizar jwt.sign:
 *  El primer argumento es un objeto con la información
 *  El segundo argumento es la llave privada con la cual se realizará el cifrado
 *  El tercer argumento es el tiempo de expiración del token.
 */
export const generateToken = (user) => {
  const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: '24h' });
  return token;
};

 
export const authToken = (req, res, next) => {
  //Recordamos que el token viene desde los headers de autorización
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ //Si no hay headers, es porque no hay token y por lo tanto no está autenticado.
    error: "Not authenticated"
  });
  const token = authHeader.split(' ')[1]; //Se hace el split para retirar la palabra 'Bearer'
  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    //jwt verifica el token existente y corroboro si es un token válido, alterado, expirado, etc.
    if (error) return res.status(403).send({ error: "Not authorized" });
    //Si todo está en orden, se descifra correctamente el token y se envía el usuario
    req.user = credentials;
    next();
  });
};

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename)