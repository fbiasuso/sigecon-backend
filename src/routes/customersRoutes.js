import express from 'express';
import {customerController} from '../controllers/customersController.js';


export const routerCustomers = express.Router();

//routerCustomer.get('/',customerController);


 routerCustomers.get('/customers',function(req, res){
    res.send('RUTA CUSTOMERS');
});