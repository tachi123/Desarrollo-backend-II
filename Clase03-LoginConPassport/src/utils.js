import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

//Crear una constante llamada createHash
//Es una función que recibe un password como argumento y genera:
//   * Genera un salt (una cadena aleatoria de 10 caracteres) 
//   * Genera el hash del password usando el salt
//   * Devuelve el hash del password 
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// Crea una constante llamada isValidPassword
// La constante es una función que recibe un objeto user y un password como argumentos
// Compara el password con el password hasheado almacenado en el objeto user
// Devuelve true si el password coincide con el password hasheado, false en caso contrario
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

export default __dirname;

