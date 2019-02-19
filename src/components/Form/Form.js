import React, { Component } from 'react'
import axios from 'axios'

const apiUrl = "/api/product"
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
            image_url:``,
            currentId: null
        })
    }

    handleEmptyFields = (callBackFn) => {

        const tempState = Object.values(this.state)
        for (let i = 0; i < tempState.length; i++) {
            if (tempState[i] == '' ||tempState[i] == 0) {
                return alert('Please add all fields')
            } 
        } 
        callBackFn()
    }

    handleNewProduct = () => {

        axios.post(apiUrl, this.state).then(() => {
            this.props.getInventory()
        })
        this.handleClearInput()
    }
    
    componentDidUpdate(oldprops){

        if (oldprops.currentId !== this.props.currentId && this.props.currentId) {
            const index = this.props.inventory
                .findIndex(product => product.product_id === this.props.currentId)
            const { product_name, price, image_url } = this.props.inventory[index]
            this.setState({
                product_name: product_name,
                price: price,
                image_url: image_url,
                currentId: this.props.currentId
            })
        }
    }

    handleProductChanges = () => {
        
        const { product_name, price, image_url } = this.state
        axios.put(`${apiUrl}/${this.state.currentId}`, {
            product_name,
            price,
            image_url
        }).then(() => {
            this.props.getInventory()
        })
        this.handleClearInput()
    }


    render(){
        return(
            <div 
                className="input-container">
                <div 
                    className="item-img" 
                    style={{"background-image" : `url(${this.state.image_url === '' ? "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" : this.state.image_url})`}} />
                <input 
                    name="product_name" 
                    onChange={ this.handleUserInput } 
                    value={ this.state.product_name } 
                    placeholder="Type the product name"/>
                <input 
                    name="price" 
                    onChange={ this.handleUserInput }  
                    value={ this.state.price } 
                    placeholder="Price"/>
                <input 
                    name="image_url" 
                    onChange={ this.handleUserInput } 
                    value={ this.state.image_url } 
                    placeholder="Add image URL"/>
                <div 
                    className="input-buttons">
                    <button 
                        onClick={this.handleClearInput}>
                        cancel
                    </button>
                    {!this.state.currentId ? 
                        <button 
                            onClick={() => 
                                this.handleEmptyFields(this.handleNewProduct)}>Add to inventory
                        </button> 
                    :   <button 
                            onClick={ () => 
                            this.handleEmptyFields( this.handleProductChanges )}>save
                        </button>} 
                </div>
            </div>
        )
    }
}