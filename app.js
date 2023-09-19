const express = require('express')
const { PORT } = require('./config')
const router = require('./routes')
const bodyParser = require('body-parser')
const { hooks } = require('./hooks')
const { consola } = require('consola')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// main api endpoint
app.use('/api/v1', router)

// initialize app hooks
hooks()

app.listen(PORT,() => {
    consola.box(`Server running on port ${PORT}`)
})