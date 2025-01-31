import orderModel from "../models/order.model.js";

export default class Order {

    getOrders = async () => {
        try{
            let orders = await orderModel.find();
            return orders;
        }catch(error){
            console.log(error);
            return null
        }
    }

    getOrderById = async (id) => {
        try{
            let order = await orderModel.findOne({_id:id});
            return order;
        }catch(error){
            console.log(error);
            return null
        }
    }

    createOrder = async (order) => {
        try{
            let result = await orderModel.create(order);
            return result;
        }catch(error){
            console.log(error);
            return null
        }
    }

    resolveOrder = async (id,order) => {
        try{
            let result = await orderModel.updateOne({_id:id},{$set:order});
            return result;
        }catch(error){
            console.log(error);
            return null
        }
    }
    
}