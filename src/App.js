import Nav from './components/header/Nav'
import Contador from './components/items/Contador';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetail, { itemDetail } from "./components/items/ItemDetail";
import './components/app.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
        <Nav/>  
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/detail/:ID' element = {<ItemDetail/>}/>
        </Routes>
        
        
        
    </BrowserRouter>
  );
}

export default App;
