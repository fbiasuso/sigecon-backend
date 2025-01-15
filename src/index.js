//const express = require('express');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
//import database from './database/database';

import {routerMain} from  './routes/mainRoutes.js';
import {routerCustomers} from  './routes/customersRoutes.js';

const app = express();


app.set('PORT', process.env.PORT || 5000);


// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use(routerCustomers);
app.use(routerMain);

app.get('/', function(req, res){
    res.send('EXPRESS INSTALADO CORRECTAMENTE');
});

app.listen(app.get('PORT'), function () {
    console.log(`Escuchando el puerto ${app.get('PORT')}!`);
});