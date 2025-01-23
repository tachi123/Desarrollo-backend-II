import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define una constante llamada filename 
// La constante almacena la ruta a un archivo meta
const __filename = fileURLToPath(import.meta.url);
// Define una constante llamada __dirname
// La constante almacena la ruta al directorio del archivo actual
const __dirname = dirname(__filename);

export default __dirname;