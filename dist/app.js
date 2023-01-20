"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const p2p_1 = require("@routers/p2p");
const app = (0, express_1.default)();
const port = 4200;
app.use('/p2p', p2p_1.P2PRouter);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
