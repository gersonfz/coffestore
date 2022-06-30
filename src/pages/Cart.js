import React, { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'

const Cart = () => {
    const { itemCart, clear, removeItem } = useContext(CartContext)

    return (
        <section>
            {
                itemCart.map((el) => (
                    <div key={el.id}>
                        <h1>{el.name}</h1>
                        <p>
                            {el.price} - 
                            {el.count}
                        </p>
                        <button onClick={() => removeItem(el.id)}> Remover unidad</button>

                    </div>
                ))
            }
            <button onClick={clear}>Clear</button>
        </section>

    )
}

export default Cart