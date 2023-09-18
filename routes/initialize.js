const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')
const { consola } = require('consola')
const fs  = require('fs')

router.get(
    '/',
    async (req, res) => {
        try {
            Client.initialize()
            return res.json({
                        status: 'success',
                        message: 'Success initializing',
                        data: {}
                    })
        }catch (error) {
            return res.json({
                status: 'error',
                message: 'error while initializing',
                data: {error}
            })
        }
    })

module.exports = router