import mongoose from 'mongoose';

export default class MongoSingleton{

    static #instance;
    
    constructor(){
        mongoose.connect('URL', {useNewUrlParser: true, useUnifiedTopology: true});
    }

    //Al momento de crear una instancia, validamos si ya se conecto
    static getInstance(){
        if(this.#instance){
            console.log("Already connected");
            return this.#instance;
        }

        this.#instance = new MongoSingleton();
        console.log("connected");
        return this.#instance;

    }

}