import express from 'express';
import {createCustomer, getAllCustomers} from '../controllers/customersController.js';


export const routerCustomers = express.Router();

routerCustomers.post('/customers', createCustomer);
routerCustomers.get('/customers', getAllCustomers);


/*  routerCustomers.get('/customers',function(req, res){
    res.send('RUTA CUSTOMERS');
}); */