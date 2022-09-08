import React from "react";
import { useParams } from "react-router-dom";
import { productos } from "../productos";
import { useEffect, useState } from "react";
import { PedirDatos } from "../helpers/PedirDatos";
import ItemDetail from "./ItemDetail";
import { Spinner } from "reactstrap";

const ItemDetailContainer = () => {
  let { itemID } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(productos);

  useEffect(() => {
    setLoading(true);

    PedirDatos()
      .then((res) => {
        setItem(res.find((product) => product.id === Number(itemID)));
        console.log(item);
      })
      .catch((error) => console.log("error: " + error))
      .finally(() => {
        console.log(item);
        setLoading(false);
      });
  }, [itemID, item]);

  

  return (
    <>
      {loading ? (
        <div className="container mt-5">
          <div className="row">
            <Spinner className="mx-auto" />
          </div>
        </div>
      ) : (
        <ItemDetail
          nombre={item.nombre}
          id={itemID}
          precio={item.precio}
          desarrolladores={item.desarrolladores}
          img={item.img}
          stock={item.stock}
          carrusel_1={item.carrusel_1}
          carrusel_2={item.carrusel_2}
          carrusel_3={item.carrusel_3}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
