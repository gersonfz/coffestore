import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import MyPromise from "../../utils/MyPromise";
import Products from "../../utils/Products";
import ItemDetails from "./ItemDetails";



const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState()
    const { id } = useParams([])
    

      useEffect(() => {
        MyPromise(2000, Products)
        .then(
            (res) => setDetail(res.find(el => el.id === parseFloat(id)))
        )
        },[detail])

    return (
        <section>
            {detail ?<ItemDetails item={detail}/> : <p>Obteniendo producto...</p> }
        </section>
    )
}


export default ItemDetailContainer  