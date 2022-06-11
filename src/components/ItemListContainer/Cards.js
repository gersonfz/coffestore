import React from "react";
import ItemCount from './ItemCount'

export const Cards = ({image, name, price, stock}) =>{
    return (
        <div>
        <img src={image} alt="Denim Jeans"/>
        <h1>{name}</h1>
        <p> $ {price}</p>
        {/* <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p> */}
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Cards