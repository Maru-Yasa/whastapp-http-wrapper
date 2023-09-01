const express = require('express')
const { PORT } = require('./config')
const router = require('./routes')
const { messageHook } = require('./hooks')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', router)

messageHook()

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);    
})