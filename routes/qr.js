const express = require('express')
const { Client } = require('../utils/client')
const qrGenerator = require('../utils/QR')

const router = express.Router()
const client = Client

let qr = null

client.on('qr', (_qr) => {
    console.log('QR 2RECEIVED', _qr);
    qr = _qr
})


router.get('/', (req, res) => {
    if (qr) {        
        return qrGenerator.image(qr, { type: 'png'}).pipe(res);
    } else {
        return res.send("")
    }
})

module.exports = router