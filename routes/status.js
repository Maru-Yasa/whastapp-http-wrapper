const express = require('express')
const router = express.Router()
const store = require('../utils/store')

router.get('/', (req, res) => {
    let status =  store.getState().status
    res.json({
        status: 'success',
        data: {
            status: status
        }
    })
})

module.exports = router