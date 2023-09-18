const express = require('express')
const router = express.Router()

const qrRoute = require('./qr')
const sendMessageRoute = require('./sendMessage')
const statusCheck = require('./status')
const logoutRoute = require('./logout')
const initializeRoute = require('./initialize')

router.use('/qr', qrRoute)
router.use('/send_message', sendMessageRoute)
router.use('/status', statusCheck)
router.use('/logout', logoutRoute)
router.use('/initialize', initializeRoute)

module.exports = router