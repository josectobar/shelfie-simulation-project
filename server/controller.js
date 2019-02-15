module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        }).catch(err => req.status(500).send(`Error, there was a problem processing your request: ${err}`))
    }, 
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const { product_name, price, image_url } = req.body
        db.create_product(product_name, price, image_url).then(response => {
            res.status(201).send('Product successfully created')
        }).catch(err => req.status(500).send(`Error, there was a problem processing your add request: ${err}`))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then(response => {
            res.status(200).send('Product successfully deleted')
        }).catch(err => req.status(500).send(`Error, there was a problem processing your delete request: ${err}`))
    }
}