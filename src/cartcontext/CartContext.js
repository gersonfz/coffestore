import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([])

    const isInCart = (id) => {
      const inCart = itemCart.find(el => el.id === id)
      return inCart
    }

    const addItem = (item, count) => {
      isInCart(item.id)
      ?
      setItemCart(itemCart.map(el => {
        if(el.id === item.id){
          el.count += count
        }
        return el
      }))
      :
      setItemCart([...itemCart, {...item, count: count}])
    }

    const clear = (item) => {
      setItemCart([])
    }

    const removeItem = (id) =>{
      setItemCart(itemCart.filter(el => el.id !== id))
    }
    
    return (
      <CartContext.Provider value ={{itemCart, addItem, clear, removeItem}}>
        {children}
      </CartContext.Provider>
    )
}