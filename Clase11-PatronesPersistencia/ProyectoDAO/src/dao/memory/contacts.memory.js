/** ABSTRACCIÓN DE LA LÓGICA DE ACCESO A DATOS 
 * GET UPDATE DELETE INSERT
*/
export default class Contacts {

    constructor() {
        this.data = [];
    }

    /** A diferencia de la persistencia en Mongo, acceder al arreglo solo implica retornarlo
     * PERO LO MAS IMPORTANTE, que el nombre "get" es idéntico para el DAO de mongo
     */
    get = () => {
        return this.data; 
    }

    insert = (contact) => {
        this.data.push(contact);
        return contact;
    }

    update = (id, contact) => {
        const index = this.data.findIndex( c => c.id === id);
        if(index === -1) return null;
        this.data[index] = { ...this.data[index], ...contact};
        return this.data[index];
    }

    delete = (id) => {
        const index = this.data.findIndex( c => c.id === id);
        if(index === -1) return null;
        this.data.splice(index,1);
    }
}