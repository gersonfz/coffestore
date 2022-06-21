import React from "react";
import ItemCount from "./ItemCount";
import styles from './Item.module.css'

export const Item = ({ image, name, price, stock}) => {

  return (
    <article>

      <div className={styles.card}>
        <img src={image} alt="Grano de cafe" />
        <div className={styles.containerPrice}>
          <h1>{name}</h1>
          <p className={styles.price}> $ {price}</p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </article>
  )
}

export default Item