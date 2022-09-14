import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

// const inicial = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //inicial

  const agregarCart = (item) => {
    setCart([...cart, item]);
    toast.success("Item agregado al carrito")
  };

  const isInCart = (productId) => {
    return cart.some((e) => e.id === productId);
  };

  const cantidadCart = () => {
    return cart.reduce((cuenta, item) => cuenta + item.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
    toast.error("Carrito vaciado");
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Producto eliminado");

  };

  // useEffect(() => {
  //   localStorage.setItem('carrito', JSON.stringify(cart))
  // }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, agregarCart, isInCart, vaciarCarrito, eliminarItem, cantidadCart }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </CartContext.Provider>
  );
};
