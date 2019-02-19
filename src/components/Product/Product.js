import React from 'react'

export default function Product(props){
    const { product_id, product_name, price, image_url } = props.product
    return (
        <div 
            className="item-container">
            <div 
                className="item-img" 
                style={{"background-image" : `url(${image_url})`}} />
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
                        onClick={() => props.handleDeleteProduct(product_id) }>
                        Delete
                    </button>
                    <button 
                        onClick={ () => props.editProduct(product_id) }>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}