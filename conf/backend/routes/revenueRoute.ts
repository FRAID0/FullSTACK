import express from 'express';
import { monthRevenue, nextYearRevenue, totalRevenue, yearRevenue } from '../controllers/orderController';


const revenueRoute = express.Router();

revenueRoute.get('/',totalRevenue)
revenueRoute.get('/month',monthRevenue)
revenueRoute.get('/year',yearRevenue)
revenueRoute.get('/year/next',nextYearRevenue)



export default revenueRoute;