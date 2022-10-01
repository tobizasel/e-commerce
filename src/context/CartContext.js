import { useState, useEffect, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";


export const CartContext = createContext();

 const inicial = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(inicial); 

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])

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

  const cartTotal = () => {
      return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const terminarCompra = (id) => {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: 'Felicitaciones por tu compra!!',
      footer: `Tu numero de compra:<b> ${id}</b>`
    })
    setCart([])
  }



  return (
    <CartContext.Provider
      value={{ cart, agregarCart, isInCart, vaciarCarrito, eliminarItem, cantidadCart, cartTotal, terminarCompra }}
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
