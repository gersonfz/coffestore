import React from "react";
import { Greeting } from "./ItemListContainer.element";


export const ItemListContainer = () => {
    return <TitleList
        greeting = {'Venta de granos de cafe de distintas partes del mundo'}
    />
        
}

const TitleList = (props) =>{
    const {greeting = "Titulo no definido"} = props
    return <Greeting>
                {greeting}
        </Greeting>
}