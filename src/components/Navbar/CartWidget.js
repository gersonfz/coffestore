import React from "react"
import { GiShoppingCart } from "react-icons/gi"
import styles from "./CartWidget.module.css"

export const IconCarShopping = () =>{
    return <div className={styles.div}>
        <GiShoppingCart/>
    </div>
}