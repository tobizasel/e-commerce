import Nav from './components/header/Nav'
import Contador from './components/itemlist/Contador';
import ItemListContainer from './components/itemlist/ItemListContainer';
import './components/app.scss';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';

function App() {
  return (

    <BrowserRouter>
        <Nav/>  
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer/>}/>
          <Route path='/juegos/:precioID' element = {<ItemListContainer/>}></Route>

          <Route path='*' element={<Navigate to='/'/>}></Route>
        </Routes>
        
        
        
    </BrowserRouter>
  );
}

export default App;
