import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import styles from './ItemCount.module.css'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const sub = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className={styles.itemCount}>
            <button disabled={stock === 0} onClick={(sub)} className={styles.button1}>-</button>
            <span>{count}</span>
            <button disabled={stock === 0} onClick={(add)} className={styles.button2}>+</button>
            <div>
                <button disabled={stock === 0} onClick={()=>onAdd(count)} className={styles.buttonCompra}><p><GiShoppingCart/></p>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount