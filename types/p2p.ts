type Fiat =
    | 'ARS'
    | 'EUR'
    | 'USD'
    | 'AED'
    | 'AUD'
    | 'BDT'
    | 'BHD'
    | 'BOB'
    | 'BRL'
    | 'CAD'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CZK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'KES'
    | 'KHR'
    | 'KRW'
    | 'KWD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'MAD'
    | 'MMK'
    | 'MXN'
    | 'MYR'
    | 'NGN'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RUB'
    | 'SAR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'THB'
    | 'TND'
    | 'TRY'
    | 'TWD'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'VES'
    | 'VND'
    | 'ZAR'

type PayType =
    | 'BANK'
    | 'TrueMoney'
    | 'ShopeePay'
    | 'CashDeposit'
    | 'LINEPay'
    | 'Paypal'
    | 'WesternUnion'
    | 'FPS'
    | 'NGNfiatbalance'
    | 'Tinkoff'
    | 'jkopay'

type TradeMethodsType = {
    payId?: string
    payType: string
    payAccount?: string
    payBank?: PayType
    paySubBank?: string
    identifier: string
}

type AdvertisingType = {
    advNo: string
    classify: 'mass' | 'profession'
    tradeType: 'Buy' | 'Sell'
    asset: 'USDT' | 'BTC' | 'BNB' | 'BUSD' | 'ETH' | 'DAI'
    fiatUnit: Fiat
    price: string
    initAmount: string
    surplusAmount: string
    amountAfterEditing: string
    maxSingleTransAmount: string
    minSingleTransAmount: string
    remarks?: string
    payTimeLimit?: string
    tradeMethods?: TradeMethodsType[]
    fiatSymbol: string
    dynamicMaxSingleTransAmount: string
    minSingleTransQuantity: string
    maxSingleTransQuantity: string
    dynamicMaxSingleTransQuantity: string
}


type AdvertiserType = {
    userNo: string
    realName?: string
    nickName: string
    orderCount?: number
    monthOrderCount: number
    monthFinishRate: number
    email?: string
    userType?: 'user' | 'merchant'
}

type P2PResponseType = {
    adv: AdvertisingType
    advertiser: AdvertiserType
}

type MakerType = {
    success: string
    price: string
    USDT: string
    order: number
    name: string
    link: string
}

export type {
    Fiat,
    PayType,
    TradeMethodsType,
    AdvertisingType,
    AdvertiserType,
    P2PResponseType,
    MakerType
}