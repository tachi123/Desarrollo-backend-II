import Order from '../dao/order.dao.js';
import Business from '../dao/business.dao.js';
import User from '../dao/user.dao.js';

import UserRepository from '../repositories/user.repository.js';

const userService = new User();
const businessService = new Business();
const orderService = new Order();

const userRepository = new UserRepository(User);

export const getOrders = async (req, res) => {
    let result = await orderService.getOrders();
    res.send({status:"success",result})
}

export const getOrderById = async (req, res) => {
    const {oid} = req.params;
    let order = await orderService.getOrderById(oid);
    res.send({status:"success",result})
}

export const createOrder = async (req, res) => {
    const {userId, businessId, products} = req.body;
    const resultUser = await userService.getUserById(userId);
    const resultBusiness = await businessService.getBusinessById(businessId);
    let actualOrders = resultBusiness.products.filter(product => products.includes(product.id));
    let sum = actualOrders.reduce( (acum,prev) => acum + prev.price, 0);
    let orderNumber = Date.now() + Math.floor(Math.random()*10000+1);
    let order = {
        number: orderNumber,
        business: businessId,
        user: userId,
        status:"pending",
        products: actualOrders.map(product  => product.id),
        totalPrice: sum
    }
    let orderResult = await orderService.createOrder(order);
    resultUser.orders.push(orderResult._id);
    await userService.updateUser(userId, resultUser);
    res.send({status:"success", orderResult})
}

export const resolveOrder = async (req, res) => {
    const {resolve} = req.query;
    let order = await orderService.getOrderById(req.params.oid);
    order.status = resolve;
    await orderService.resolveOrder(order._id, order);
    res.send({status:"success",result:"resolveOrder"})
}