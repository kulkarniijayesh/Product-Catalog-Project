import express from 'express';
const app = express();

app.listen("8080", ()=>{
    console.log("Catalog site running at : ", "http://localhost:8080");
});

let homePage = 
`<html>
    <body>
        <center>
        <b>Product Catalog Site</b>
        </center>
        </br></br>
        <p>This is a dynamically generated product catalog.</p>
    </body>
</html>`;


app.get("/",(req, res)=>{
    res.send(homePage);
});