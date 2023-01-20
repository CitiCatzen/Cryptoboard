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
exports.data = void 0;
const P2P_ENDPOINT = 'https://p2p.binance.com';
const url = `${P2P_ENDPOINT}/bapi/c2c/v2/friendly/c2c/adv/search`;
const data = (() => __awaiter(void 0, void 0, void 0, function* () {
    const option = {
        page: 1,
        rows: 10,
        asset: 'USDT',
        tradeType: 'BUY',
        fiat: 'USD',
        transAmount: '10000'
    };
    const response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(option)
    });
    console.log(response);
    res;
}))();
exports.data = data;
