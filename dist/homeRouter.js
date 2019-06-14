"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeHtml_1 = require("./homeHtml");
exports.router = express_1.default.Router();
exports.router.get('/', function (req, res) {
    res.send(homeHtml_1.str);
});
