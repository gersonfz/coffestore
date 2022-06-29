import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([])

    const isInCart = (id) => {
      const found = itemCart.find(el => el.id === id)
      return found
    }

    const addItem = (item, count) => {
      isInCart(item.id)
      ?
      setItemCart(
        itemCart.map(el => {
          if(el.id === item.id){
            el.count =+ count
          }
        })
      ) 
      : 
      setItemCart([...itemCart, {...item, count: count}])
    }
    
    return (
      <CartContext.Provider value ={{itemCart, addItem}}>
        {children}
      </CartContext.Provider>
    )
}