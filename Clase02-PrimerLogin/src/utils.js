import {fileURLToPath} from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);

export const isValidPassword = (user, password) => password == user.password;

const __dirname = dirname(__filename)

export default __dirname;

