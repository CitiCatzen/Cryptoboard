"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2PController = void 0;
const ramda_1 = __importDefault(require("ramda"));
const controller = {
    getSortedMakers(data) {
        const makers = data.data;
        const pricePath = ramda_1.default.path(['adv', 'price']);
        const priceAscend = ramda_1.default.ascend(pricePath);
        const finishRatePath = ramda_1.default.path(['advertiser', 'monthFinishRate']);
        const finishRateDescend = ramda_1.default.descend(finishRatePath);
        const sortWithPriceAndFinishRate = ramda_1.default.sortWith([
            priceAscend,
            finishRateDescend,
        ]);
        return sortWithPriceAndFinishRate(makers);
    }
};
exports.P2PController = controller;
