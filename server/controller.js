module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        }).catch(err => req.status(500).send(`Error, there was a problem processing your request: ${err}`))
    }
}