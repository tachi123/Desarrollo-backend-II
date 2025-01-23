import Business from '../dao/business.dao.js';

const businessService = new Business();

export const getBusiness = async (req, res) => {
    let result = await businessService.getBusiness();
    if(!result) return res.status(500).send({status: "error", error: "Something went wrong, try again later"});
    res.send({status:"success", result})
}

export const getBusinessById = async (req, res) => {
    const {bid} = req.params;
    let result = await businessService.getBusinessById(bid);
    if(!result) return res.status(500).send({status: "error", error: "Something went wrong, try again later"});
    res.send({status:"success",result})
}

export const createBusiness = async (req, res) => {
    const business = req.body; //Las validaciones de campos quedan para uds
    let result = await businessService.saveBusiness(business);
    if(!result) return res.status(500).send({status: "error", error: "Something went wrong, try again later"});
    res.send({status:"success",result})
}

export const addProduct = async (req, res) => {
    const product = req.body;  //Las validaciones de campos quedan para uds
    const business = await businessService.getBusinessById(req.params.bid);
    business.products.push(product);
    await businessService.updateBusiness(business._id,business);
    res.send({status:"success",result:"Business updated"})
}

