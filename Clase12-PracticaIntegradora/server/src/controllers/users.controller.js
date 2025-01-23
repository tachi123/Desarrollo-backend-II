import User from '../dao/user.dao.js';

const userService = new User();

export const getUsers = async (req, res) => {
    let result = await userService.getUsers();
    res.send({status:"success",result})
}

export const getUserById = async (req, res) => {
    const {uid} = req.params;
    let result = await userService.getUserById(uid);
    res.send({status:"success",result})
}

export const saveUser = async (req, res) => {
    const user = req.body; //Las validaciones quedan para uds
    let result = await userService.saveUser(user);
    res.send({status:"success",result})
}