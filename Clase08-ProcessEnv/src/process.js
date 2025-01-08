import {Command} from 'commander';

const program = new Command(); //Inicializamos un nuevo comando de commander

program //option(EL COMANDO, DESCRIPCION, VALOR POR DEFAULT)
    .option('-d','Variable para debug',false) //un flag con el caracter d
    .option('-p <port>','Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production') //<mode> es el argumento a colocar
    .requiredOption('-u <user>', 'Usuario utilizando el aplicativo', 'No se ha declarado un usuario') //para requiredOption, el tercer arg es un mensaje de error en caso de que no se especifique
    .option('-l, --letters [letters...]', 'specify letters');
    ;

program.parse(); //parse se utiliza para cerrar la configuración de comandos

console.log('Options:', program.opts());
console.log('Otras opts: ', program.args)