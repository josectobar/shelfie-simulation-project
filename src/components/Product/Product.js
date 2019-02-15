import React from 'react'

export default function Product(props){
    const { name, price, image_url } = props.product
    return (
        <div>
            <h1>{name}</h1>
            <img src={image_url} alt={name}/>
            <h2>${price}</h2>
        </div>
    )
}