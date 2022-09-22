import Nav from './components/header/Nav'
import ItemListContainer from './components/itemlist/ItemListContainer';
import './components/app.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext'
import Footer from './components/Footer';
import Checkout from './components/checkout/Checkout';

function App() {
  return (

    <CartProvider>

    <BrowserRouter>
        <Nav/>  
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>  
          <Route path='/:generoId' element = {<ItemListContainer/>}/>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Navigate to='/'/>}></Route>
        </Routes>
        
        <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
