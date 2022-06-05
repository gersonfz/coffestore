import React from "react";

import { GiShoppingCart } from "react-icons/gi"
import { ItemListContainer } from "./CartWidget.elements";

export const CartWidget = () => {
    return <ItemListContainer>
            <ContainerListCart />
            <GiShoppingCart />
        </ItemListContainer>
}

const ContainerListCart = (props) =>{
    const {Carrito=0} = props
    return<span>
            {Carrito}
        </span>
}