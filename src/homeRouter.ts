import express from 'express';
import path from 'path';
import {str, num_war} from '../views/homeHtml'

export const router = express.Router();


router.get('/',(req, res)=>{
    console.log("tr-"+ num_war);
    res.send(str);
});