import React, { Component } from 'react'
import axios from 'axios'

const postApiUrl = "/api/product"
export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            product_name:``,
            price: 0,
            image_url:``,
            currentId: null
        }    
    }
    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClearInput = () => {
        this.setState({
            product_name:``,
            price: 0,
            image_url:``
        })
    }

    handleNewProduct = () => {
        axios.post(postApiUrl, this.state).then(() => {
            this.props.getInventory()
        })
        this.handleClearInput()
    }

    // componentDidUpdate(oldProps){
    //     const updateProductIndex = oldProps.inventory.findIndex(this.state.currentId)
    //     const { product_name, price, product_id, image_url } = oldProps.inventory[updateProductIndex]
    // }

    HandleEditMode(product) {
        const { product_name, price, product_id, image_url } = product
        this.setState({
            product_name: product_name,
            price: price,
            image_url: image_url,
            currentId: product_id
        })
    }
    

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input name="product_name" onChange={ this.handleUserInput } value={ this.state.product_name } placeholder="Type the product name"/>
                <input name="price" onChange={ this.handleUserInput }  value={ this.state.price } placeholder="Price"/>
                <input name="image_url" onChange={ this.handleUserInput } value={ this.state.image_url } placeholder="Add image URL"/>
                <button onClick={this.handleClearInput}>cancel</button>
                {!this.state.currentId? <button onClick={this.handleNewProduct}>Add to inventory</button> : <button>save</button>}
                
            </div>
        )
    }
}