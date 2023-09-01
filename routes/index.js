const express = require('express')
const router = express.Router()

const qrRoute = require('./qr')
const sendMessageRoute = require('./sendMessage')

router.use('/qr', qrRoute)
router.use('/send_message', sendMessageRoute)

module.exports = router