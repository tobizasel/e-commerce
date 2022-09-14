import Nav from './components/header/Nav'
import ItemListContainer from './components/itemlist/ItemListContainer';
import './components/app.scss';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext'

function App() {




  return (

    <CartProvider>

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
    </CartProvider>
  );
}

export default App;
