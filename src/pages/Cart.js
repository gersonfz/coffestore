import React, { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import styles from "./pages.module.css"
import { Link } from 'react-router-dom'


const Cart = () => {
    const { itemCart, clear, removeItem, totallyPrice } = useContext(CartContext)
    
    const FulledCart = () =>{
        return(
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
            <Link to={'/FinishCart'}>
                <button>
                    Finalizar Compra
                </button>
            </Link>
        </div> 
     </section>
        )
    }

    const EmptyCart = () => {
        return (<>
          <h1>Vacio</h1>
            <Link to={'/'}>Volver a home</Link>
        </>
        )
      }


    return (
    <section>
        {
           itemCart.length ? <FulledCart/> : <EmptyCart/>
        }
    </section>
    )
}
export default Cart
