import React, { useContext } from "react"
import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"
import { CartContext } from "../../cartcontext/CartContext"
import styles from "./Navbar.module.css"


const CartWidget = () =>{
    const {itemCart} = useContext(CartContext)
    let cartNumber = 0
    itemCart.map((el) =>(
        cartNumber = cartNumber + el.count
    ))

    return <div className={styles.cartWidget}>
        <Link to="/cart"><GiShoppingCart/></Link>
        <p>{cartNumber}</p>
    </div>
}

export default CartWidget