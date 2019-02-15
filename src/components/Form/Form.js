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
        // console.log(event.target.name)
        this.setState = ({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input name="name" onChange={ this.handleUserInput } value ={ this.state.name } />
                <input name="price" onChange={ this.handleUserInput } value ={ this.state.price } />
                <input name="imageUrl" onChange={this.handleUserInput} value ={this.state.imageUrl} />
            </div>
        )
    }
}