import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "../components/itemdetail/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Checkout from "../components/checkout/Checkout";
import Nav from "../components/header/Nav";
import ItemListContainer from "../components/itemlist/ItemListContainer";
import { AddProducts } from "../scripts/AddProducts";

const PrivateRoutes = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="*" element={<Navigate to="/" />}></Route>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:generoId" element={<ItemListContainer />} />
        <Route path="/detail/:itemID" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<Navigate to="/"/>}/>
        <Route path="/login" element={<Navigate to="/"/>}/>
        <Route path="/panel" element={<AddProducts/>}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default PrivateRoutes;
