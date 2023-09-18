const express = require('express')
const router = express.Router()

const qrRoute = require('./qr')
const sendMessageRoute = require('./sendMessage')
const statusCheck = require('./status')
const logoutRoute = require('./logout')

router.use('/qr', qrRoute)
router.use('/send_message', sendMessageRoute)
router.use('/status', statusCheck)
router.use('/logout', logoutRoute)

module.exports = router