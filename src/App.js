import Nav from "./components/header/Nav";
import ItemListContainer from "./components/itemlist/ItemListContainer";
import "./components/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";
import { LoginProvider } from "./context/LoginContext";
import Login from "./components/login/Login";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
