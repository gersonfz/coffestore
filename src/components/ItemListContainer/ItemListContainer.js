import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MyPromise from "../../utils/MyPromise";
import Products from "../../utils/Products";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";


export const ItemListContainer = ({greeting = 'Titulo no definido'}) => {
    const [prod, setProd] = useState ([])
    const {id} = useParams()

        useEffect(() => {
            MyPromise(2000, Products)
            .then(
                (res)=>{id === undefined ? setProd(res) : setProd(res.filter(el => el.category === parseFloat(id)))}
            )},[id])
    
    
    return (
        <section className={styles.section}>
            <h2>{greeting}</h2>
            <div className={styles.cardsProducts}>
            {   
                prod.length > 0 ? <><ItemList item={prod}/></> : <div><h2 className={styles.loading}>Cargando...</h2></div> 
            }
            </div>
        </section>      
)}

export default ItemListContainer;


