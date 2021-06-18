"use strict";
//\\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var router_1 = require("./router");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(router_1.router);
app.listen(config_1.config.PORT, function () { console.log("listening on port: " + config_1.config.PORT); });
