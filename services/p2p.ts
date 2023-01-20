import ramda, { Ord } from 'ramda'
import { MakerType, P2PResponseType } from 'types/p2p'

const P2P_ENDPOINT = 'https://p2p.binance.com'

const service = {
    getSortedMakers(makers: MakerType[]) {
        const pricePath = ramda.prop('price') as unknown as () => Ord
        const priceAscend = ramda.ascend(pricePath)
        const finishRatePath = ramda.prop('success') as unknown as () => Ord
        const finishRateDescend = ramda.descend(finishRatePath)
        const sortWithPriceAndFinishRate = ramda.sortWith([
            priceAscend,
            finishRateDescend,
        ])
        return sortWithPriceAndFinishRate(makers) as MakerType[]
    },

    prepare(makers: P2PResponseType[]): MakerType[] {
        return makers.map((maker: P2PResponseType) => {
            const nickName = maker.advertiser.nickName
            const userType = maker.advertiser.userType
            const nickNameWithUserType =
                userType === 'merchant'
                    ? `${nickName} (${userType})`
                    : nickName
    
            return {
                success: (maker.advertiser.monthFinishRate * 100).toFixed(2),
                price: maker.adv.price,
                USDT: maker.adv.surplusAmount,
                order: maker.advertiser.monthOrderCount,
                name: nickNameWithUserType,
                link: `${P2P_ENDPOINT}/en/advertiserDetail?advertiserNo=${maker.advertiser.userNo}`
            }
        })
    }
}

export {
    service as P2PService
}