import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import MyPromise from "../../utils/MyPromise";
import Products from "../../utils/Products";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";


export const ItemListContainer = ({greeting = 'Titulo no definido'}) => {
    const [prod, setProd] = useState ([])
    const [detail, setDetail] = useState()
    const {params} = useParams()
    console.log(params)
    useEffect(() => {
        MyPromise(2000, Products)
        .then(
            (res) => setProd(res),
            setDetail(prod.filter(el => el.catid === 1)),

            
        )

        .catch((error) => console.log("error"))
    }, [prod], detail)
    
    return (
        <section className={styles.section}>
            <h2>{greeting}</h2>
            <div className={styles.cardsProducts}>
            {   
                prod ? <><ItemList Products={prod} /></> : <div><h2 className={styles.loading}>Cargando...</h2><img src="https://images.squarespace-cdn.com/content/v1/55679273e4b0f3550bf4a8fe/1600211434546-4GKK12MR4V51UFIFX8O3/running-cup-neon-05.gif?format=1000w" alt='Loading espera'/></div>
            }

            </div>

            
        </section>      
)}

export default ItemListContainer;


