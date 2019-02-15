require('dotenv').config()

const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const massive = require('massive')

const ctrl = require('./controller')
const app = express()
const PORT = 4000

// massive(CONNECTION_STRING).then()

app.listen(PORT, () => console.log(`Live at port: ${PORT}`))