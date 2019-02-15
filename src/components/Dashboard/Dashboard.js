import React, { Component }from 'react'

import Product from '../Product/Product'
import axios from 'axios';

const deleteApiUrl = "/api/product"
export default class Dashboard extends Component {

    handleDeleteProduct(id){
        axios.delete(`${deleteApiUrl}/${id}`)
    }
    componentDidUpdate(){
        this.props.getInventory()
    }

    render(){
        const productDisplay = this.props.inventory.map(product => {
            return ( 
                <div key={product.product_id}>
                    <Product editProduct={this.props.editProduct} id={product.product_id} handleDeleteProduct={this.handleDeleteProduct} product={product}/>
                </div>
            )
        })

        return(
            <div>
                <h1>Dashboard</h1>
                {productDisplay}
            </div>
        )
    }
}