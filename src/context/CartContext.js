import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

// const inicial = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]); //inicial

  const agregarCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (productId) => {
    return cart.some((e) => e.id === productId);
  };

  const cantidadCart = () => {
    return cart.reduce((cuenta, item) => cuenta + item.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  }

  const eliminarItem = (id) => {
    setCart( cart.filter ((item) => item.id !== id))
  }

  // useEffect(() => {
  //   localStorage.setItem('carrito', JSON.stringify(cart))
  // }, [cart])

  return (
    <CartContext.Provider value={{ cart, agregarCart, isInCart, vaciarCarrito, eliminarItem }}>
      {children}
    </CartContext.Provider>
  );
};
