import React, { Component }from 'react'

import Product from '../Product/Product'

export default class Dashboard extends Component {

    render(){
        const productDisplay = this.props.inventory.map(product => {
            return ( 
                <div key={product.product_id}>
                    <Product product={product}/>
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