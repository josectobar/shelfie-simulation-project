import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props){
    const { product_id, product_name, price, image_url } = props.product
    return (
        <div 
            className="item-container">
            <div 
                className="item-img" 
                style={{"backgroundImage" : `url(${image_url})`}} />
            <div 
                className="right-container">
                <div 
                    className="product-info">
                    <h3>{product_name}</h3>
                    <h4>${price}</h4>
                </div>
                <div 
                    className="product-buttons">
                    <button 
                        onClick={ () => props.handleDeleteProduct(product_id) }>
                        Delete
                    </button>
                    <Link 
                        className="product-button"
                        to={`/edit/${product_id}`}>
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    )
}