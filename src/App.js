import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return( <>
      <Navbar/> 
        <ItemListContainer greeting={'Venta de granos de cafe de todo el mundo'}>
          </ItemListContainer>
    </>
)}

export default App;
