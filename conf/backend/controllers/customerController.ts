import { sqlCustomer }  from "../sql_statemantes/customer";
import  client   from "../dataBaseConnection";
import addResponse from "../sub_funktion/add_request";
import { response } from "express";


export const selectOneCustomer = (req:any, res:any): Promise<string | Array<Object>> =>{
    const id = req.params.customerId;

    let response: string | Array<Object>;

    return new Promise((resolve: any, reject: any) => {
    client.query(`SELECT * from CUSTOMER WHERE c_custkey = ${id}`,
        (err,resp)=>{
            addResponse(err,res,resp,"Customer is not in our database");
            if (typeof response === "string") {
                reject(response);
              }
              resolve(response);
        });
    });
}


export const selectAllCustomer = (req: any, res: any, next?: any) => {
    client.query(sqlCustomer.selectAllCustomers, (err, resp) => {
        addResponse(err, res, resp, " - We do not have such a Customer in our database");
    });
};



export const selectBestNrCustomer = (req:any, res:any): Promise<String | Array<Object>> =>{
    const number = parseInt(req.query.numbers);
    const period = req.query?.period;

    let response: String | Array<Object>;

    return new Promise((resolve: any, reject:any ) => {
        client.query(sqlCustomer.selectBestNrCustomer(number, period),
        (err,resp)=>{
            addResponse(err,res,resp,"- This customer in not the number one");
            if (typeof response === "string") {
                reject(response);
              }
              resolve(response);
        })
    })
 
}

export const selectBestOrCustomer = (req:any, res:any, next?:any): Promise<String | Array<Object>> =>{
    const number = parseInt(req.query.numbers);
    const period = req.query?.period;

    return new Promise((resolve:any, reject:any) => {
    client.query(sqlCustomer.selectBestOrCustomer(number, period),
    (err,resp)=> {
        addResponse(err,res,resp,"- This customer has not the most orders")
        if (typeof response === "string") {
            reject(response);
          }
          resolve(response);
    })
    })
}