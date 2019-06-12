"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen("8080", function () {
    console.log("Catalog site running at : ", "http://localhost:8080");
});
var homePage = "<html>\n    <body>\n        <center>\n        <b>Product Catalog Site</b>\n        </center>\n        </br></br>\n        <p>This is a dynamically generated product catalog.</p>\n    </body>\n</html>";
app.get("/", function (req, res) {
    res.send(homePage);
});
