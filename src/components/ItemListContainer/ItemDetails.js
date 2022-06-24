import React from "react";
import ItemCount from "./ItemCount";
import styles from './Item.module.css'

export const ItemDetails = ({ item }) => {
console.log(item)
  return (
    <article>
      <div className={styles.card}>
        <img src={item.image} alt="Grano de cafe" />
        <div className={styles.containerPrice}>
          <h1>{item.name}</h1>
          <p className={styles.price}> $ {item.price}</p>
        </div>
        <h2>Detalles</h2>
        <h3>Tipo</h3>
        <p>{item.details.type}</p>
        <h3>Intensidad</h3>
        <p>{item.details.intesity}</p>
        <h3>Origen</h3>
        <p>{item.details.origen}</p>
        <h3>Peso</h3>
        <p>{item.details.weigth}</p>
        <h3>Descripcion</h3>
        <p>{item.details.description}</p>
        <ItemCount stock={item.stock} />

      </div>

    </article>

  )
}

export default ItemDetails