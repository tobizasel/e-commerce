import {
  addDoc,
  collection,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.scss";
import { LoginContext } from "../../context/LoginContext";

const Checkout = () => {
  const { cart, cartTotal, terminarCompra } = useContext(CartContext);
  const { user } = useContext(LoginContext);
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  const [valores, setValores] = useState({
    nombre:"",
    mail:"",
    direccion: "",
    tarjeta: "",
    vencimiento: "",
  });

  const handleInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    const compra = {
      comprador: valores,
      items: cart,
      total: cartTotal(),
    };

    const compraRef = collection(db, "compras");
    const productosRef = collection(db, "productos");
    const batch = writeBatch(db);
    const fecha = new Date();
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(q);

    const sinStock = [];

    productos.docs.forEach((doc) => {
      console.log("LLAMADO EN CHECKOUT");
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
          comprado: true,
          fecha: fecha.toLocaleDateString(),
        });
      } else {
        sinStock.push(itemInCart);
      }
    });

    if (sinStock.length === 0) {
      batch.commit().then(() => {
        addDoc(compraRef, compra).then((doc) => {
          terminarCompra(doc.id);
        });
      });
    } else {
      sinStock.forEach((item) => {
        toast.error(`${item.nombre} no tiene stock`);
      });
    }
  };

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      {cart.map((producto) => (
        <div className="checkout__productos mb-5">
          <div className="checkout__productos--texto">
            <h6>
              Estas comprando: {producto.nombre} x{producto.cantidad}
            </h6>
            <p>Con un precio de ${producto.precio}</p>
          </div>
          <img
            src={producto.img}
            alt={producto.name}
            className="checkout__productos--img"
          />
        </div>
      ))}

      <div>
        <h3>El precio total es ${cartTotal()}</h3>
      </div>

      <input
        type={"text"}
        name="nombre"
        className="my-3 form-control"
        placeholder="Tu Nombre"
        onChange={handleInput}
        value={user.name}
        disabled
        required
      ></input>
      <input
        type={"email"}
        name="mail"
        className="my-3 form-control"
        placeholder="Tu mail"
        onChange={handleInput}
        value={user.mail}
        disabled
        required
      ></input>
      <input
        type={"text"}
        name="direccion"
        className="my-3 form-control"
        placeholder="Tu direccion"
        onChange={handleInput}
        value={valores.direccion}
        required
      ></input>
      <input
        type={"text"}
        name="tarjeta"
        className="my-3 form-control"
        placeholder="Tarjeta"
        onChange={handleInput}
        value={valores.tarjeta}
        required
      ></input>
      <input
        type={"date"}
        name="vencimiento"
        className="my-3 form-control"
        placeholder="Fecha de Vencimiento"
        min={`${año}-${mes}-${dia}`}
        max={`${año + 10}-${mes}-${dia}`}
        onChange={handleInput}
        value={valores.vencimiento}
        required
      ></input>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default Checkout;
