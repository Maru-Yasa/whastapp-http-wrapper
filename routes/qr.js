const express = require('express')
const { Client } = require('../utils/client')
const qrGenerator = require('qr-image')
const router = express.Router()
const client = Client
const store = require('../utils/store')

let qr = null

client.on('qr', (_qr) => {
    console.log('QR RECEIVED', _qr);
    store.getState().setQr()
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