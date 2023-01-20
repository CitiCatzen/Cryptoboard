"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2PRouter = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const p2p_1 = require("../services/p2p");
const P2P_ENDPOINT = 'https://p2p.binance.com';
const url = `${P2P_ENDPOINT}/bapi/c2c/v2/friendly/c2c/adv/search`;
const router = (0, express_1.Router)();
exports.P2PRouter = router;
router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const option = {
        page: 1,
        rows: 10,
        asset: 'USDT',
        tradeType: 'Buy',
        fiat: 'USD',
        transAmount: '100',
        countries: ['GE']
    };
    const { data } = yield axios_1.default.post(url, option, {
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    });
    const makers = p2p_1.P2PService.prepare(data.data);
    const response = p2p_1.P2PService.getSortedMakers(makers);
    res.status(200).json(response);
}));
