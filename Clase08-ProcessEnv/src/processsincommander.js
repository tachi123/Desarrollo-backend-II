// En todos los ejemplos retiramos los dos argumentos por default (nombre del archivo y path de node)
// Si ejecutamos "node processargs.js 1 2 3"
console.log(process.argv.slice(2)); // Imprimirá [1, 2, 3]

// Si ejecutamos "node processargs.js a 2 -a"
// Imprimirá ['a', '2', '-a']

// Si ejecutamos "node processargs.js"
// Imprimirá []

// Si ejecutamos "node processargs.js --mode development"
// Imprimirá ['--mode', 'development']