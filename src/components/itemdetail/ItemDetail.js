import React, { useContext, useState } from "react";
import Carrousel from "./Carrousel";
import { Botones } from "./Botones";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const {
    nombre,
    id,
    precio,
    desarrolladores,
    img,
    stock,
    carrusel_1,
    carrusel_2,
    carrusel_3,
  } = item;

  const [cantidad, setCantidad] = useState(1);
  let texto;

  const {cart, agregarCart, isInCart} = useContext(CartContext)

  const cambiarTexto = () => {
    if (precio === 0) {
      texto = "GRATIS";
    } else {
      texto = `$${precio * cantidad}`;
    }
  };

  const handleAdd = () => {
    const selectedItem = {
      id,
      nombre,
      precio,
      cantidad
    }
    agregarCart(selectedItem)
    console.log('esta? ' + isInCart(selectedItem.id))

  };

  cambiarTexto();

  return (
    <div className="container mt-5">
      <div className="row">
        <h2 className="col-10">{nombre}</h2>
        <h2 className="col-2">{texto}</h2>
      </div>
      <Carrousel
        className="mt-5"
        foto_1={carrusel_1}
        foto_2={carrusel_2}
        foto_3={carrusel_3}
      />

      <Botones
        cantidad={cantidad}
        setCantidad={setCantidad}
        stock={stock}
        agregar={handleAdd}
        isInCart={isInCart}
      />

      <Link to="/cart" className="btn btn-outline-success">Finalizar la compra</Link>
    </div>
  );
};

export default ItemDetail;
