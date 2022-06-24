import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Details from './pages/Details'
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path={`/details/:id`} element={<Details />} />
        <Route path={`/category/:id`} elements = {<ItemListContainer />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
