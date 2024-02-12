import express from 'express'
import { selectProduct, selectProducts } from '../controllers/productsController';

const orderRoute = express.Router();

orderRoute.get('/:productId',selectProduct);
orderRoute.get('/',selectProducts);

export default orderRoute;