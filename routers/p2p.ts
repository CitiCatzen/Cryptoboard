import axios from 'axios'
import { response, Router } from 'express'
import { P2PService } from '../services/p2p'


const P2P_ENDPOINT = 'https://p2p.binance.com'
const url = `${P2P_ENDPOINT}/bapi/c2c/v2/friendly/c2c/adv/search`

const router = Router()

router.get('/get', async (req, res) => {
    const option = {
        page: 1,
        rows: 10,
        asset: 'USDT',
        tradeType: 'Buy',
        fiat: 'USD',
        transAmount: '100',
        countries: ['GE']
    }
    const { data } = await axios.post(url, option, {
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })

    const makers = P2PService.prepare(data.data)
    const response = P2PService.getSortedMakers(makers)

    res.status(200).json(response)
})

export {
    router as P2PRouter
}
