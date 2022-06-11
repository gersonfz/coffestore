import React, { useState } from "react";
import styles from './ItemCount.module.css'

export const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    const [payment, setPayment] = useState()
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
    const pay = () => {
        if (count > 0) {
            setPayment(count || stock - 1)

        } else if (count === 0) {
            setPayment(0)
        }
    }

    return <div className={styles.div}>
        <button onClick={(sub)} className={styles.button1}>-</button>
        <span>{count}</span>
        <button onClick={(add)} className={styles.button2}>+</button>
        <button onClick={(pay)} className={styles.buttonCompra}>Comprar</button>
        {
            stock <= 0 ? <h3>No hay stock</h3> : payment && (<h3>Has comprado {payment} productos<p>Quedan {stock - payment} productos</p>
            </h3>) || (<h3>Stock: {stock}</h3>)
        }
    </div>
}

export default ItemCount