import React from 'react'

export default function Product(props){
    const { product_name, price, image_url } = props.product
    return (
        <div>
            <h1>{product_name}</h1>
            <img src={image_url} alt={product_name}/>
            <h2>${price}</h2>
        </div>
    )
}