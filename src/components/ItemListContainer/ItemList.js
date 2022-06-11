import React from 'react'
import Item from './Item'

export const ItemList = ({Products}) => {
  return (
    Products.map(p => 
        <Item
            {...p}
        />
        )
  )
}

export default ItemList