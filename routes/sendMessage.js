const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')

router.post(
    '/',
    body('to').notEmpty(),
    body('message').notEmpty(),
    (req, res) => {
        try {            
            const clientId = `${req.body.to}@c.us`
            Client.sendMessage(clientId, req.body.message)
            return res.json({
                status: 'success',
                message: 'Success sending message',
                data: {}
            })
        } catch (error) {
            return res.json({
                status: 'error',
                message: 'error sending message',
                data: {error}
            })
        }
    })

module.exports = router