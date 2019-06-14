import express from 'express';

//Routers:
import {router} from './homeRouter';

const app = express();

app.use('/home', router);



app.listen("8080", ()=>{
    console.log("Catalog site running at : ", "http://localhost:8080");
});