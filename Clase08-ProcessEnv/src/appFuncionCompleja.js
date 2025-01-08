import express from 'express';
import { fork } from 'child_process';

const app = express();

function operacionCompleja() {
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
      result += i;
    }
    return result;
}

app.get('/test', (req, res) => {
    res.send('Anda?');
});
  
app.get('/calculo-nobloq', (req, res) => {
    const child = fork('./src/childFork.js');//Primero forkeamos la operacion
    child.send('¡Inicia el cálculo, por favor!');//El padre envía un mensaje al hijo
    child.on('message', result => {//Esperar hasta que el subproceso o el hijo responda, y ahí procederemos a mostrar el mensaje
        res.send(`El resultado de la operación es ${result}`);
    })
});

app.get('/calculo-bloq', (req, res) => {
    const result = operacionCompleja();
    res.send(`El resultado de la operación es ${result}`);
});

const server = app.listen(3000, ()=> {
    console.log("Listening on PORT 3000")
});