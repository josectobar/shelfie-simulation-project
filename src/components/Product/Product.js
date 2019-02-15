import React from 'react'

export default function Product(props){
    const { product_id, product_name, price, image_url } = props.product
    return (
        <div key={product_id}>
            <h1>{product_name}</h1>
            <img src={image_url} alt={product_name}/>
            <h2>${price}</h2>
            <button onClick={() => props.handleDeleteProduct(product_id) }>Delete</button>
            <button onClick={ () => props.editProduct(product_id) }>Edit</button>
        </div>
    )
}