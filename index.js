const authentication = require('./routes/authentication')
const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

app.use(bodyParser.json())
app.use('/auth', authentication)

app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`))