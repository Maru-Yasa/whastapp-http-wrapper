const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')
const { consola } = require('consola')
const fs  = require('fs')
const store = require('../utils/store')


router.get(
    '/',
    async (req, res) => {
        try {
            await Client.logout()
            store.getState().setOffline()
            Client.initialize()
            return res.json({
                        status: 'success',
                        message: 'Success logout',
                        data: {}
                    })
        }catch (error) {
            consola.error(error)
            return res.json({
                status: 'error',
                message: 'error while logout',
                data: {error}
            }).status(500)
        }
    })

module.exports = router