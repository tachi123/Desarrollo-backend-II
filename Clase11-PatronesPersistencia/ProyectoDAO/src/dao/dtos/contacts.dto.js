/**
 * DTO - Data Transfer Object 
 * Tiene como propósito transformar los datos de contactos recibidos del frontend al formato que necesite el backend
 * o al revés, transformar los datos a enviar al usuario
 */
export default class ContactDTO{

    constructor(contact){
        //Capaz el frontend mando el dato como "name"
        this.first_name = contact.name;
        this.last_name = contact.last_name;
        this.active = true; // Podemos usar DTOs para setear nuevas propiedades
        //Capaz el frontend envío el número de teléfono con guiones, o no lo mando porque puede ser opcional
        this.phone = contact.phone ? contact.phono.split("-").join("") : "";
        //otros campos
    }
}