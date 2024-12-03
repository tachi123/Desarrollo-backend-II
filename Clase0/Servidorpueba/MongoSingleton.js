import mongoose from 'mongoose';

export default class MongoSingleton{
    static #instance;

    constructor(){
        mongoose.connect('Url', { useNewUrlParser: true, useUnifiedTopology: true });
    }

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