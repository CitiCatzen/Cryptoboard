import 'module-alias/register'
import express from 'express'
import { P2PRouter } from '@routers/p2p'

const app = express()
const port = 4200

app.use('/p2p', P2PRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})