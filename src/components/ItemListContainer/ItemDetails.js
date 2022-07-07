import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../cartcontext/CartContext";
import ItemCount from "./ItemCount";
import styles from './ItemDetails.module.css'


export const ItemDetails = ({item}) => {
  const [add, setAdd] = useState((0))
  const {addItem} = useContext(CartContext)
  const onAdd = (qty) =>{
    setAdd(qty)
    addItem(item, qty)
  }
  
  return (
    <section className={styles.sectionDetails}>
      <article className={styles.detailArticle}>
        <div>
          <img src={item.image} alt="Grano de cafe" />
          <div className={styles.card}>
          {
            add > 0 
            ? 
            <div>
              <NavLink className={styles.buttonFinish} to={'/cart'}>Terminar mi compra</NavLink>
              <NavLink className={styles.buttonFinish} to={'/'}>Seguir Comprando</NavLink>              
            </div>
            :
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          }
        </div>
        </div>
        <div className={styles.containerDetails}>
          <h1>{item.name}</h1>
          <h3>Tipo</h3>
          <p>{item.details.type}</p>
          <h3>Intensidad</h3>
          <p>{item.details.intesity}</p>
          <h3>Origen</h3>
          <p>{item.details.origen}</p>
          <h3>Peso</h3>
          <p>{item.details.weigth}</p>
          <h3>Descripcion</h3>
          <p className={styles.price}> $ {item.price}</p>
          <p>{item.details.description}</p>
        </div>

      </article>
    </section>
  )
}

export default ItemDetails