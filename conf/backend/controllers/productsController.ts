import { sqlProducts } from "../sql_statemantes/products";
import client from "../dataBaseConnection";
import addResponse from "../sub_funktion/add_request";

export const selectProduct = (req:any, res:any, next:any)=>{
    const id = req.params.productId;

    client.query(sqlProducts.selectProduct(id), 
    (err, resp)=>{
        addResponse(err, res, resp, "- Could not select product")
    });
};

export const selectProducts = (req:any, res:any, next:any)=>{
    client.query(sqlProducts.selectProducts,
    (err,resp)=>{
        addResponse(err,res,resp, "- Could not select products")
    });
}