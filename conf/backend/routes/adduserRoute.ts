import express from 'express'
import {createUser} from '../controllers/addUserController'
const adduserRoute = express.Router();

adduserRoute.post('/', createUser);

export default adduserRoute;