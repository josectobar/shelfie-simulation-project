require('dotenv').config()

const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const massive = require('massive')

const ctrl = require('./controller')
const app = express()
const PORT = process.env.PORT || 4040
app.use(bodyParser.json())
const { CONNECTION_STRING } = process.env


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    app.status(500).send(`Something went wrong with the DB connection!: ${err}`)
})

app.route('/api/inventory')
.get(ctrl.getProducts)

app.route('/api/product')
.post(ctrl.addProduct)

app.route('/api/product/:id')
    .delete(ctrl.deleteProduct)
    .put(ctrl.updateProduct)
    .get(ctrl.getProduct)


app.listen(PORT, () => console.log(`Live at port: ${PORT}`))