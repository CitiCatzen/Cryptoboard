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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinGeckoApiRouter = void 0;
const express_1 = require("express");
const network_1 = require("@utils/network");
const router = (0, express_1.Router)();
exports.CoinGeckoApiRouter = router;
const APIUrl = 'https://api.coingecko.com/api/v3/';
router.get('/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, network_1.request)(`${APIUrl}/ping`);
    res.status(200).json(data);
}));
router.get('/price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ids = ['bitcoin', '01coin', 'binancecoin'];
    const vs_currencies = ['rub', 'usd'];
    const coins = yield (0, network_1.request)(`${APIUrl}/simple/price?ids=${ids.join(',')}&vs_currencies=${vs_currencies.join(',')}`);
    const response = [];
    let id = 1;
    for (const [name, data] of Object.entries(coins)) {
        const { rub, usd } = data;
        response.push({
            id,
            name,
            rub,
            usd
        });
        id++;
    }
    res.status(200).json(response);
}));
router.get('/rubToUsd', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sum = req.body.sum;
}));
