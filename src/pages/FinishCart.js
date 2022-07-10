import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../cartcontext/CartContext'
import db from '../firebase/config'

const FinishCart = () => {

    const {itemCart, totallyPrice, clear} = useContext(CartContext)
    const navigate = useNavigate()

    const [click, setClick] = useState(false)
    const [orderId, setOrderId] = useState()
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const sendOrder = (name, lastname, phone, email) =>{
        const date = new Date()
        const order = {
            buyer: {name: name, lastname: lastname, phone: phone, email: email},
            items: [{...itemCart}],
            date: date,
            totallyPrice: totallyPrice
        }
        const cartRef = collection(db, 'orders')
        const ordersCollection = (cartRef)
        addDoc(ordersCollection, order)
        .then(({id}) => {
          setOrderId(id);
          setTimeout(()=>{
            clear();
            navigate('/')
          }, 10000)
        })
        .catch((err) => console.log(err))
      }


    const handleSubmit = (e) =>{
        e.preventDefault();
        sendOrder(name, lastname, phone, email);
    }

    
    return (
        <section>
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name">Nombre </label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" name="name" placeholder="José"/>
                <label htmlFor="lastname">Apellido </label>
                <input onChange={(e) => setLastname(e.target.value)} value={lastname} type="text" id="lastname" name="lastname" placeholder="Pérez"/>
                <label htmlFor="telefono">Teléfono </label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="phone" id="telefono" name="telefono" placeholder="0414-123-4567"/>
                <label htmlFor="email">Email </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="telefono" name="email" placeholder="hola@mail.com"/>
            </div>
            <p>Precio total a pagar: {totallyPrice}</p>
            <div>
                <button type='submit' onClick={()=>setClick(true)}> Enviar</button>
                {
                    click && <p>Su orden fue realizada con exito. El numero de su orden es: {orderId}</p>
                }
                {console.log(orderId)}
            </div>
        </form>
    </section>
    )
}

export default FinishCart