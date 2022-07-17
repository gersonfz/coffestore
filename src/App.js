import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartcontext/CartContext';
import Home from './pages/Home';
import Details from './pages/Details'
import Category from './pages/Category';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Error404 from './pages/Error404';
import Footer from './layout/footer/Footer';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
          <Footer/>
      </CartProvider>
    </>
  )
}

export default App;
