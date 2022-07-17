import React, { useContext } from 'react'
import { CartContext } from '../../cartcontext/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import styles from "../../styles/Cart.module.css"
import { Link } from 'react-router-dom'


const Cart = () => {
    const { itemCart, clear, removeItem, totallyPrice } = useContext(CartContext)
    return (
    <main>
        {
           itemCart.length
           ?
           <section className={styles.sectionCart}>
           {itemCart.map((el) =>(
               <article key={el.id}>
                   <div>
                       <h1>{el.name}</h1>
                       <p>
                           {el.price} - 
                           {el.qty}
                       </p>
                   </div>
                   <div>
                       <button className={styles.buttonRemove} onClick={() => removeItem(el.id)}> <BsFillTrashFill /></button>
                   </div>
                   
               </article>))}
           <div>
               <p>Precio total: {totallyPrice}</p>
           </div>
           <div>
               <button className={styles.buttonClear} onClick={clear}><p>Clear all</p> <BsFillTrashFill /></button>
           </div>
           <div>
           <Link to={'/checkout'}>
               <button>
                   Finalizar Compra
               </button>
           </Link>
       </div> 
    </section>
           :
        <section className={styles.cartEmpty}>
            <h1>¡Vaya! ¡Parece que se te olvidó algo!</h1>
            <img src="https://cdn3.iconfinder.com/data/icons/infinicons-shopping-carts/100/shopping_Sad-512.png" alt='shopping cart sad'></img>
            <h2>Tu carrito se encuentra vacio</h2>
            <Link to={'/'}>Volver a home</Link>
        </section>
        }
    </main>
    )
}
export default Cart
