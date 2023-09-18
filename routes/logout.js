const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')
const { consola } = require('consola')
const fs  = require('fs')

router.post(
    '/',
    (req, res) => {
        consola.success('Logout successfuly')
        try {            

            if (fs.existsSync('../.wwebjs_auth')) {
                fs.unlinkSync('../.wwebjs_auth')
            } else {
                return res.json({
                    status: 'error',
                    message: 'error while logout',
                    data: {}
                })
            }

            return res.json({
                status: 'success',
                message: 'Success logout',
                data: {}
            })
        } catch (error) {
            return res.json({
                status: 'error',
                message: 'error while logout',
                data: {error}
            })
        }
    })

module.exports = router