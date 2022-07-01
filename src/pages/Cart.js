import React, { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import styles from "./pages.module.css"


const Cart = () => {
    const { itemCart, clear, removeItem } = useContext(CartContext)

    return (
        <section className={styles.sectionCart}>
            {
                itemCart.map((el) => (
                    <article>
                        <div key={el.id}>
                            <h1>{el.name}</h1>
                            <p>
                                {el.price} - 
                                {el.count}
                            </p>
                        </div>
                        <div>
                            <button className={styles.buttonRemove} onClick={() => removeItem(el.id)}> <BsFillTrashFill /></button>
                        </div>
                    </article>

                ))
            }
            <button className={styles.buttonClear} onClick={clear}><p>Clear all </p> <BsFillTrashFill /></button>
        </section>

    )
}

export default Cart