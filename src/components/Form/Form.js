import React, { Component } from 'react'
import axios from 'axios'
import {apiiUrlProduct} from '../../api'


export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            product_name:``,
            price: 0,
            image_url:``
        }    
    }

    componentDidMount(){
        axios.get(`${apiiUrlProduct}/${this.props.match.params.id}`).then(res => {
            console.log("FIRE!",this.props)
            const { product_name, price, image_url } = res.data[0]
            this.setState({
                product_name: product_name,
                price: price,
                image_url: image_url
            })
        })
    }

    handleUserInput = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClearInput = () => {
        this.props.match.path === "/edit/:id" ?
            this.props.history.push('/') 
        : 
            this.setState({
            product_name:``,
            price: 0,
            image_url:``
            })
    }

    handleProductChanges = () => {
        const { product_name, price, image_url } = this.state
        const { id } = this.props.match.params
        axios.put(`${apiiUrlProduct}/${id}`, {
            product_name,
            price,
            image_url
        })
        this.props.history.push('/')
    }

    handleEmptyFields = (callBackFn) => {
        const tempState = Object.values(this.state)
        for (let i = 0; i < tempState.length; i++) {
            if (tempState[i] === '') {
                return alert('Please add all fields')
            } 
        } 
        callBackFn()
    }

    handleNewProduct = () => {

        axios.post(apiiUrlProduct, this.state)
        this.props.history.push('/')
    }
    


    render(){
        return(
            <div 
                className="input-container">
                <div 
                    className="item-img" 
                    style={{"backgroundImage" : `url(${this.state.image_url === '' ? "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" : this.state.image_url})`}} />
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
                    {this.props.match.path === "/edit/:id" ? 
                        
                        <button 
                        onClick={ () => 
                        this.handleEmptyFields( this.handleProductChanges )}>save
                        </button>
                    :    
                        <button 
                            onClick={() => 
                                this.handleEmptyFields(this.handleNewProduct)}>Add to inventory
                        </button>

                    }                       
                </div>
            </div>
        )
    }
}