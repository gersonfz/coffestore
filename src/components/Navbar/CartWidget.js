import React, { useContext } from "react"
import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"
import { CartContext } from "../../cartcontext/CartContext"


const CartWidget = () =>{
    const {itemCart} = useContext(CartContext)
    let cartNumber = 0
    itemCart.map((el) =>(
        cartNumber = cartNumber + el.count
    ))

    return <div>
        {cartNumber}
        <Link to="/cart"><GiShoppingCart/></Link>
    </div>
}

export default CartWidget