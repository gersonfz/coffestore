import React, { useContext } from "react"
import { GiShoppingCart } from "react-icons/gi"
import { CartContext } from "../../cartcontext/CartContext"
import styles from "./CartWidget.module.css"


const CartWidget = () =>{
    const {itemCart} = useContext(CartContext)
    let cartNumber = 0
    itemCart.map(el =>(
        cartNumber = cartNumber + el.count
    ))

    return <div className={styles.div}>
        {cartNumber}
        <GiShoppingCart/>
    </div>
}

export default CartWidget