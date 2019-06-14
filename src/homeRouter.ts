import express from 'express';
import path from 'path';
import {str} from './homeHtml'

export const router = express.Router();


router.get('/',(req, res)=>{
    res.send(str);
});