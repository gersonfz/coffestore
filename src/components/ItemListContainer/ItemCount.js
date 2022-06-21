import React, { useState } from "react";
import styles from './ItemCount.module.css'

export const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    const [payment, setPayment] = useState()
    const [buyed, setBuyed] =useState(false)

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
    const pay = () =>{
        if (count > 0){
            setPayment(count || stock - 1)
        }else if (count === 0){
            setPayment(0)
        }
        setBuyed(true)
    }


    return <div className={styles.div}>
        <button disabled={stock === 0} onClick={(sub)} className={styles.button1}>-</button>
        <span>{count}</span>
        <button disabled={stock === 0} onClick={(add)} className={styles.button2}>+</button>
        <button disabled={stock === 0} onClick={(pay)} className={styles.buttonCompra}>Comprar</button>
        {
            buyed ? (<h3>Has comprado {payment} productos <p>Quedan {stock - payment} productos</p></h3>) : (<h3> Stock: {stock}</h3>)
        }
    </div>
}

export default ItemCount