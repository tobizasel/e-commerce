import React, { useContext, useState } from "react";
import Carrousel from "./Carrousel";
import { Botones } from "./Botones";
import { CartContext } from "../context/CartContext";
import './itemdetail.scss'

const ItemDetail = ({ item }) => {
  const {
    nombre,
    id,
    precio,
    img,
    stock,
    comprado,
    carrusel_1,
    carrusel_2,
    carrusel_3,
  } = item;

  const [cantidad, setCantidad] = useState(1);
  let texto;

  const {agregarCart, isInCart } = useContext(CartContext);

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
      cantidad,
      comprado,
      img
    };
    agregarCart(selectedItem);
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

      <div className="itemDetail__comprar mt-5">
        <Botones
          cantidad={cantidad}
          setCantidad={setCantidad}
          stock={stock}
          agregar={handleAdd}
          isInCart={isInCart(id)} 
      />

        <p>Stock: {stock}</p>

      </div>
    </div>
  );
};

export default ItemDetail;
