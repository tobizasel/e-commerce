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

  useEffect(() => {
    setLoading(true);

    PedirDatos()
      .then((res) => {
        setItem(res.find((product) => product.id === Number(itemID)));
      })
      .catch((error) => console.log("error: " + error))
      .finally(() => {
        setLoading(false);
      });
  }, [item]);

  

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
          item={item}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
