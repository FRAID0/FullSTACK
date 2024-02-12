import express from 'express';
import client from './dataBaseConnection';
import productRoute from './routes/productRoute';
import customerRoute from './routes/customerRoute';
import adduserRoute from './routes/adduserRoute';
import { errorHandler } from './handler/errorhandler';
import bodyParser from 'body-parser';
import revenueRoute from './routes/revenueRoute';
import orderRoutes from './routes/orderRoute';


client.connect ();
const app = express();
const port = 3000

app.listen(port,()=>{
    console.log (`Server is ready at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin,X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        
        return res.status(200).json({});
    }
    next();
});


app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/order', orderRoutes);
app.use('/revenues',revenueRoute);
app.use('/addUser', adduserRoute);

app.use (errorHandler);