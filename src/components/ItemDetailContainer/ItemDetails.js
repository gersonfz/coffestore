import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../cartcontext/CartContext";
import ItemCount from "./ItemCount";
import styles from './ItemDetailsContainer.module.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const ItemDetails = ({ item }) => {
  const [add, setAdd] = useState((0))
  const { addItem } = useContext(CartContext)
  const onAdd = (qty) => {
    setAdd(qty)
    addItem(item, qty)
  }

  return (
    <section>
      <div className={styles.containerCard}>
        <Card className={styles.card}>
              <Card.Img src={item.image} alt='Grano de cafe' />
                <Card.Body>
                  {
                    add > 0
                      ?
                      <div className={styles.finishBuy}>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        <NavLink to={'/cart'}><Button className={styles.buttonFinish}>Checkout</Button></NavLink>
                      </div>
                      :
                      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                  }
                </Card.Body>
            </Card>
      </div>
        <div className={styles.containerDetails}>
            <div>
              <h1>{item.name}</h1>
              <h2>Tipo</h2>
              <p>{item.details.type}</p>
              <h2>Intensidad</h2>
              <p>{item.details.intensity}</p>
              <h2>Origen</h2>
              <p>{item.details.origen}</p>
              <h2>Peso</h2>
              <p>{item.details.weigth}</p>
            </div>
        </div>
            <div className={styles.containerDescription}>
              <h2>Descripcion</h2>
              <p>{item.details.description}</p>
            </div>
    </section>
  )
}

export default ItemDetails