import React from "react";
import ItemCount from "./ItemCount";
import styles from './Item.module.css'
import {Link} from 'react-router-dom'


export const Item = ({id, image, name, price, stock}) => {

  return (<>
    <article key={id}>
      <div className={styles.card}>
        <img src={image} alt="Grano de cafe" />
        <div className={styles.containerPrice}>
          <h1>{name}</h1>
          <p className={styles.price}> $ {price}</p>
          <Link to={`/details/${id}`}><button className={styles.buttonCompra}>Ver detalles</button></Link>
          <ItemCount stock={stock} />
        </div>
      </div>
    </article>
  </>
  )
}

export default Item