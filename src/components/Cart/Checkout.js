import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../cartcontext/CartContext'
import db from '../../firebase/config'
import {NavLink} from 'react-router-dom'

const Checkout = () => {

    const { itemCart, totallyPrice, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [data, setData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: ''
    })


    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) =>{
        event.preventDefault();
        const date = new Date();
        const newItem = {...itemCart}
        const order = {
            buyer: data,
            items: newItem,
            date: date,
            totallyPrice: totallyPrice
        }
        const cartRef = collection(db, 'orders')
        const ordersCollection = (cartRef)
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setOrderId(id);
                clear();
            })
            .catch((err) => console.log(err))
    }

    return (
        <main>
            {
                itemCart.length
                    ?
                    <form onSubmit={sendData}>
                        <div>
                            <label htmlFor="name">Nombre </label>
                            <input onChange={handleInput} type="text" id="name" name="name" placeholder="José" />
                            <label htmlFor="lastname">Apellido </label>
                            <input onChange={handleInput} type="text" id="lastname" name="lastname" placeholder="Pérez" />
                            <label htmlFor="telefono">Teléfono </label>
                            <input onChange={handleInput} type="phone" id="telefono" name="phone" placeholder="0414-123-4567" />
                            <label htmlFor="email">Email </label>
                            <input onChange={handleInput} type="email" id="telefono" name="email" placeholder="hola@mail.com" />
                        </div>
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                    :
                    
                    <div>
                        <h2> Su compra fue realizada con exito. Su ticket de compra es: {orderId}</h2>
                        <h3><NavLink to={'/'}>Seguir comprando</NavLink></h3>
                    </div>
            }
        </main>
    )
}

export default Checkout