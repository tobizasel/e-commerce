import React, { useState } from "react";
import Carrousel from "./Carrousel";
import { Botones } from "./Botones";
import { Link } from "react-router-dom";

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

  const cambiarTexto = () => {
    if (precio === 0) {
      texto = "GRATIS";
    } else {
      texto = `$${precio * cantidad}`;
    }
  };

  const handleAdd = () => {
    console.log({ id,nombre,precio, cantidad });
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
      />

      <Link to="/cart" className="btn btn-outline-success">Finalizar la compra</Link>
    </div>
  );
};

export default ItemDetail;
