import usersModel from "../models/user.model.js";

export default class User {

    getUsers = async () => {
        try{
            let users = await usersModel.find();
            return users;
        }catch(error){
            console.log(error);
            return null
        }
    }

    getUserById = async (id) => {
        try{
            let user = await usersModel.findOne({_id:id});
            return user;
        }catch(error){
            console.log(error);
            return null
        }
    }

    saveUser = async (user) => {
        try{
            let result = await usersModel.create(user);
            return result;
        }catch(error){
            console.log(error);
            return null
        }
    }

    updateUser = async (id,user) => {
        try{
            let result = await usersModel.updateOne({_id:id},{$set:user});
            return result;
        }catch(error){
            console.log(error);
            return null
        }
    }

}