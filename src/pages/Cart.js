import React, { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'

const Cart = () => {
    const { itemCart } = useContext(CartContext)

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
                    </div>
                ))
            }
        </section>

    )
}

export default Cart