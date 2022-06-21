import React, { useEffect, useState } from "react";
import Products from "../../utils/Products";
import ItemDetails from "./ItemDetails";



const ItemDetailContainer = ({id}) =>{
    const [detail, setDetail] = useState(null)

    const getProduct = (id) => (   
        Products.find((el) => el.id === id)
    )

    const getProductById = (id) => {
          setDetail(getProduct(id));
      };

    useEffect(() =>{
        getProductById(id, setDetail)
    },[id])

    return (
        <section>
            {detail ? <ItemDetails item={detail} /> : <p>Cargando...</p>}
        </section>
    )
}
export default ItemDetailContainer  