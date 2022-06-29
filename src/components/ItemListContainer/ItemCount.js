import React, { useState } from "react";
import styles from './ItemCount.module.css'

export const ItemCount = ({item, stock, initial, addItem }) => {
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
            <button disabled={stock === 0} onClick={()=>addItem(item, count)} className={styles.buttonCompra}>Comprar</button>
        </div>
    )
}

export default ItemCount