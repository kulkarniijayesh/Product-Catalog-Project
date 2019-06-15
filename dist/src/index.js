"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//Routers:
var homeRouter_1 = require("./homeRouter");
var app = express_1.default();
app.use('/home', homeRouter_1.router);
app.listen("8080", function () {
    console.log("Catalog site running at : ", "http://localhost:8080");
});
