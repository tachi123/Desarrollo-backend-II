export default class Products{

    constructor() {
        this.data = [];
    }

    get = () => {
        return this.data; 
    }

    insert = (product) => {
        this.data.push(product);
        return product;
    }

    update = (id, product) => {
        const index = this.data.findIndex( c => c.id === id);
        if(index === -1) return null;
        this.data[index] = { ...this.data[index], ...product};
        return this.data[index];
    }

    delete = (id) => {
        const index = this.data.findIndex( c => c.id === id);
        if(index === -1) return null;
        this.data.splice(index,1);
    }

}