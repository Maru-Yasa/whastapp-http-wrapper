const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')
const { consola } = require('consola')

router.post(
    '/',
    body('to').notEmpty(),
    body('message').notEmpty(),
    (req, res) => {
        consola.info('Message send request')
        try {            
            const clientId = `${req.body.to}@c.us`
            // consola.info(req.body.to)            
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