import { sqlOrder } from "../sql_statemantes/order";
import client from "../dataBaseConnection";
import addResponse from "../sub_funktion/add_request";

export const selectOrders = (req:any, res:any, next:any)=> {

    client.query(sqlOrder.selectOrders,
        (err,resp)=>{
            addResponse(err,res,resp,"- We do not have orders")
    });
}

export const selectOrder = (req:any, res:any, next:any)=> {
    const id = req.params.orderId;

    client.query(sqlOrder.selectOrder(id),
    (err,resp)=>{
            addResponse(err,res,resp,"- We do not have this order")
    });
}

export const totalRevenue = (req:any, res:any, next:any)=> {

    client.query(sqlOrder.selectTotalRevenue,
    (err,resp)=>{
            addResponse(err,res,resp, "- Could not select totalRevenue")
    });
}

export const monthRevenue = (req:any, res:any, next:any)=> {
    const month = req.query.month_s;

   client.query(sqlOrder.selectMonthRevenue(month),
   (err,resp)=>{
       addResponse(err,res,resp, "- Could not select monthRevenue")
   });
}

export const yearRevenue = (req:any, res:any, next:any)=> {
    const year = req.query.year_s;

    client.query(sqlOrder.selectYearRevenue(year),
    (err,resp)=>{
        addResponse(err,res,resp, "- Could not select yearRevenue")
    });
}

export const nextYearRevenue = async (
    req: any,
    res: any
  ): Promise<number> => {
    const actualYearRevenueF = (
      req: any,
      res: any
    ): Promise<number> => {
      return new Promise((resolve: any, reject: any) => {
        let result = 1;
  
        client.query(sqlOrder.actualYearRevenue, (err, resp) => {
          result = !err ? resp.rows[0].actualyearrevenue : 1;
  
          resolve(result);
        });
      });
    };
  
    const lastYearRevenueF = (req: any, res: any): Promise<number> => {
      return new Promise((resolve: any, reject: any) => {
        let result = 1;
  
        client.query(sqlOrder.lastYearRevenue, (err, resp) => {
          result = !err ? resp.rows[0].lastyearrevenue : 0;
  
          resolve(result);
        });
      });
    };
  
    const lastYearRevenue = await lastYearRevenueF(req, res);
    const actualYearRevenue = await actualYearRevenueF(req, res);
  
    const increase = (lastYearRevenue !== null ? actualYearRevenue / lastYearRevenue : 0);
    const nextYearRevenue: number = increase !== 0 ? parseFloat((actualYearRevenue * increase + actualYearRevenue).toFixed(2)) : 0;

  
    res.status(200).json({
      increase: `${increase}`,
      lastYearRevenue: `${lastYearRevenue}`,
      actualYearRevenue: `${actualYearRevenue}`,
      nextYearRevenue: `${nextYearRevenue}`,
    });
  
    return nextYearRevenue;
  };
  