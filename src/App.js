import Nav from './components/header/Nav'
import Contador from './components/itemlist/Contador';
import ItemListContainer from './components/itemlist/ItemListContainer';
import './components/app.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';

function App() {
  return (

    <BrowserRouter>
        <Nav/>  
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer/>}/>
        </Routes>
        
        
        
    </BrowserRouter>
  );
}

export default App;
