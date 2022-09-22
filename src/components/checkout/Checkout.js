import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId  } from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [valores, setValores] = useState({
    nombre: "",
    mail: "",
    direccion: "",
  });

  const { cart, cartTotal, terminarCompra } = useContext(CartContext);

  const handleInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const compra = {
      comprador: valores,
      items: cart,
      total: cartTotal(),
    };

    const compraRef = collection(db, "compras");
    const productosRef = collection(db, 'productos')
    const batch = writeBatch(db)
    const fecha = new Date;
    const q = query(productosRef,where(documentId(), 'in', cart.map(item => item.id)))

    const productos = await getDocs(q)

    const sinStock = [];

    productos.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id)

      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
          comprado: true,
          fecha: fecha.toLocaleDateString()
        })
      }else {
        sinStock.push(itemInCart)
      }
    });

    if (sinStock.length === 0) {
      batch.commit()
        .then(() => {
          addDoc(compraRef, compra)
            .then((doc) => {
              terminarCompra(doc.id)
            })
        })
    } else{
      sinStock.forEach((item) => {
        toast.error(`${item.nombre} no tiene stock`)
      })
    }

  };

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <div className="row text-center">
        <p>Estas comprando: {cart.map((producto) => producto.nombre + " ")}</p>
        <p>Con un precio de: ${cartTotal()}</p>
      </div>

      <input
        type={"text"}
        name="nombre"
        className="my-3 form-control"
        placeholder="Tu nombre"
        onChange={handleInput}
        value={valores.nombre}
      ></input>
      <input
        type={"email"}
        name="mail"
        className="my-3 form-control"
        placeholder="Tu mail"
        onChange={handleInput}
        value={valores.mail}
      ></input>
      <input
        type={"text"}
        name="direccion"
        className="my-3 form-control"
        placeholder="Tu direccion"
        onChange={handleInput}
        value={valores.direccion}
      ></input>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default Checkout;
