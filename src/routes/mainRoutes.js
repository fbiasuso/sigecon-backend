import express from 'express';
import {mainController} from '../controllers/mainController.js';


export const routerMain = express.Router();

//routerMain.get('/',mainController);

routerMain.get('/',function(req, res){
    res.send('RUTA MAIN');
});
