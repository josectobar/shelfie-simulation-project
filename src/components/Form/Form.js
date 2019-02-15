import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name:``,
            price: 0,
            imageUrl:``
        }    
    }
    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCancel = () => {
        this.setState({
            name:``,
            price: 0,
            imageUrl:``
        })
    }
    

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input name="name" onChange={ this.handleUserInput } value={ this.state.name } placeholder="Type the product name"/>
                <input name="price" onChange={ this.handleUserInput }  value={ this.state.price } placeholder="Price"/>
                <input name="imageUrl" onChange={ this.handleUserInput } value={ this.state.imageUrl } placeholder="Add image URL"/>
                <button onClick={this.handleCancel}>cancel</button>
                <button>Add to inventory</button>
            </div>
        )
    }
}