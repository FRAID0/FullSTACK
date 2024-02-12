import Joi from "joi";
import userSignUp from "../models/adduserModel"

export const createUser = (req:any,res:any,next:any)=>{
    const result = Joi.valid(req.body, userSignUp)

    if(!result.error(new Error)){
        res.status(200).json(req.body);
        return;
    }
    res.status(400).send(result.error.toString());
};