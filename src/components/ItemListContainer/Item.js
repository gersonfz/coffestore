import React from "react";
import styles from '../../styles/Item.module.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Item = ({ id, image, name, price }) => {

  return (

    <Card className={styles.card}>
      <Card.Img variant="top" src={image} alt='Grano de cafe' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={styles.price}>
          <p>$ {price}</p>
        </Card.Text>
        <Link to={`/details/${id}`}><Button className={styles.buttonDetail}>Ver detalles</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default Item