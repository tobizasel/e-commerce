import Nav from './components/header/Nav'
  import ItemListContainer from './components/itemlist/ItemListContainer';
import './components/app.scss';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import {CartContext} from './context/CartContext'

function App() {

  const [cart, setCart] = useState([]);

  const agregarCart = (item) => {
    setCart([...cart, item])    
    console.log(cart);
  }

  const isInCart = (id) => {
    return cart.some((e) => e.id === id)
  } 


  return (

    <CartContext.Provider value={{cart, agregarCart, isInCart}}>

    <BrowserRouter>
        <Nav/>  
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/juegos/:precioID' element = {<ItemListContainer/>}></Route>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<Navigate to='/'/>}></Route>
        </Routes>
        
        
        
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
