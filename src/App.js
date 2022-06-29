import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Details from './pages/Details'
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Category from './pages/Category';
import Cart from './pages/Cart';
import { CartProvider } from './cartcontext/CartContext';


function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:id' element={<Category/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;
