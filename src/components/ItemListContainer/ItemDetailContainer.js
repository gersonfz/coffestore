import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import MyPromise from "../../utils/MyPromise";
import Products from "../../utils/Products";
import ItemDetails from "./ItemDetails";



const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState()
    const [getItem, setGetItem] = useState([])
    const { id } = useParams([])
    

      useEffect(() => {
        MyPromise(2000, Products)
        .then(
            (res) => setGetItem(res),
            setDetail(getItem.find(el => el.id === parseFloat(id))),
        )
        },[getItem])

    return (
        <section>
            {detail ?<ItemDetails item={detail}/> : <p>Obteniendo producto...</p> }
        </section>
    )
}


export default ItemDetailContainer  