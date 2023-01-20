"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2PService = void 0;
const ramda_1 = __importDefault(require("ramda"));
const P2P_ENDPOINT = 'https://p2p.binance.com';
const service = {
    getSortedMakers(makers) {
        const pricePath = ramda_1.default.prop('price');
        const priceAscend = ramda_1.default.ascend(pricePath);
        const finishRatePath = ramda_1.default.prop('success');
        const finishRateDescend = ramda_1.default.descend(finishRatePath);
        const sortWithPriceAndFinishRate = ramda_1.default.sortWith([
            priceAscend,
            finishRateDescend,
        ]);
        return sortWithPriceAndFinishRate(makers);
    },
    prepare(makers) {
        return makers.map((maker) => {
            const nickName = maker.advertiser.nickName;
            const userType = maker.advertiser.userType;
            const nickNameWithUserType = userType === 'merchant'
                ? `${nickName} (${userType})`
                : nickName;
            return {
                success: (maker.advertiser.monthFinishRate * 100).toFixed(2),
                price: maker.adv.price,
                USDT: maker.adv.surplusAmount,
                order: maker.advertiser.monthOrderCount,
                name: nickNameWithUserType,
                link: `${P2P_ENDPOINT}/en/advertiserDetail?advertiserNo=${maker.advertiser.userNo}`
            };
        });
    }
};
exports.P2PService = service;
