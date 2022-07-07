import React from "react";
import styles from './Item.module.css'
import {Link} from 'react-router-dom'


export const Item = ({id, image, name, price}) => {

  return (<>
    <article className={styles.itemArticle}>
      <div className={styles.card}>
        <img src={image} alt="Grano de cafe" />
        <div className={styles.containerPrice}>
          <h1>{name}</h1>
          <p className={styles.price}> $ {price}</p>
          <Link to={`/details/${id}`}><button className={styles.buttonDetail}>Ver detalles</button></Link>
        </div>
      </div>
    </article>
  </>
  )
}

export default Item