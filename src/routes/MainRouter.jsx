import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Category from '../pages/Category';
import NavbarComponent from "../components/Navbar/NavbarComponent";
import Cart from '../pages/Cart';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/category/:categoria' element={<Category />} />
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
