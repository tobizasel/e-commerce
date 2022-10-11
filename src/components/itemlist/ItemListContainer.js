import React from "react";
import ItemList from "./ItemList";
import { Spinner } from "reactstrap";
import "./itemlist.scss";
import {useProducts} from "../hooks/useProducts"

const ItemListContainer = () => {
  
  const {datos, loading} = useProducts();

  return (
    <div className="container list__container my-5">
      {loading ? (
        <div className="row">
          <Spinner className="mx-auto" />
        </div>
      ) : (
        <div className="row list__container">
          {datos.map((e) => (
            <div className="col-4 item mb-4">
              <ItemList
                id={e.id}
                nombre={e.nombre}
                precio={e.precio}
                desarrolladores={e.desarrolladores}
                img={e.img}
                stock={e.img}
                cantidad={e.cantidad}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
