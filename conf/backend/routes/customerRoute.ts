import express from 'express';
import { selectAllCustomer, selectOneCustomer, selectBestNrCustomer, selectBestOrCustomer } from '../controllers/customerController';

const customerRoute = express.Router();

customerRoute.get('/best', selectBestNrCustomer);
customerRoute.get('/mostOrder', selectBestOrCustomer);
customerRoute.get('/:customerId',selectOneCustomer );
customerRoute.get('/', selectAllCustomer);

export default customerRoute;