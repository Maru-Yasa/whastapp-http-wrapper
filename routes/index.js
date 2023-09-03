const express = require('express')
const router = express.Router()

const qrRoute = require('./qr')
const sendMessageRoute = require('./sendMessage')
const statusCheck = require('./status')

router.use('/qr', qrRoute)
router.use('/send_message', sendMessageRoute)
router.use('/status', statusCheck)

module.exports = router