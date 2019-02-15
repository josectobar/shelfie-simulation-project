import React, { Component } from 'react'
import axios from 'axios'

const postApiUrl = "/api/product"
export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            product_name:``,
            price: 0,
            image_url:``
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
    

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input name="product_name" onChange={ this.handleUserInput } value={ this.state.product_name } placeholder="Type the product name"/>
                <input name="price" onChange={ this.handleUserInput }  value={ this.state.price } placeholder="Price"/>
                <input name="image_url" onChange={ this.handleUserInput } value={ this.state.image_url } placeholder="Add image URL"/>
                <button onClick={this.handleClearInput}>cancel</button>
                <button onClick={this.handleNewProduct}>Add to inventory</button>
            </div>
        )
    }
}