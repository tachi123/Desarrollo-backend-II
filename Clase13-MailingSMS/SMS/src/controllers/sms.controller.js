import config from '../config/config.js';
import twilio from 'twilio';

const client = twilio(config.twilioAccountSID, config.twilioAuthToken);

export const enviarSMS = async (req,res) =>  {
    try{
        const { nombre, producto } = req.body; //Obtener los query params
        if(!nombre || !producto ){ //Valida que se proporciones ambos parámetros
            res.status(400).send({status: 'error', message: "Se requieren los parámetros nombre y producto"})
        }
        const message = await client.messages.create({
            body: `Gracias, ${nombre}, tu solicitud del producto ${producto} ha sido aprobada.`,
            from: config.twilioSMSNumber,
            to: config.trialNumber
        })

        res.send({status: "success", message: "SMS enviado correctamente.", sid: message.sid})
    }catch(error){
        console.error("Error al enviar SMS", error)
        res.status(500).send({status: 'error', message: "Error al enviar el SMS. ", error: error.message})
    }

}