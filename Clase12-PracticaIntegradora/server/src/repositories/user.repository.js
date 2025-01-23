import UserDTO from "../dao/DTOs/user.dto.js";

export default class UserRepository {

    constructor(dao){
        //Recibimos el dao que vamos a utilizar
        this.dao = dao;
    }

    getUsers = async () => {
        let result = await this.dao.get();
        return result;
    }

    getUserById = async (id) => {
        let result = await this.dao.getUserById(id);
        return result;
    }

    saveUser = async (user) => {
        let userToInsert = new UserDTO(contact);
        let result = await this.dao.saveUser(user);
        return result;
    }

    updateUser = async (id,user) => {
        let result = await this.dao.updateUser(id,user);
        return result;
    }

}