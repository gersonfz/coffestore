import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ItemDetails from "./ItemDetails";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/config";



const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState()
    const { id } = useParams([])
    

      useEffect(() => {
        const detailRef = doc(db, "Products", id)
        getDoc(detailRef).then((snapshot) =>{
            if(snapshot.exists()){
                setDetail({id: snapshot.id, ...snapshot.data()})
            }
        }).catch(err => console.log(err))
        },[detail])

    return (
        <section>
            {detail ?<ItemDetails item={detail}/> : <p>Obteniendo producto...</p> }
        </section>
    )
}


export default ItemDetailContainer  