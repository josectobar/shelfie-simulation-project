import React, { Component }from 'react'

import Product from '../Product/Product'
import axios from 'axios';
import { apiUrl, apiiUrlProduct } from '../../api' 

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
          inventory:[]
        }
      }

      componentDidMount(){
    
        this.getInventory()
      }
    
      getInventory = () => {
    
        axios.get(apiUrl).then(res => {
          this.setState({
            inventory: res.data
          })
        })
      }

    handleDeleteProduct = (id) => {     
        axios.delete(`${apiiUrlProduct}/${id}`).then(() => {
          this.getInventory() 
        })
    }

    render(){
        const productDisplay = this.state.inventory.map(product => {
            return ( 
                <div 
                    key={product.product_id}>
                    <Product handleDeleteProduct={this.handleDeleteProduct} product={product}/>
                </div>
            )
        })

        return(
            <div>                
                <div 
                    className="products-container">
                    {productDisplay}                    
                </div>
            </div>
        )
    }
}