import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import {productos} from '../productos'
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {

  
  
  const getDatos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getDatos()
      .then((res) => setDatos(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="container mt-5">
      {
         loading
        ? 
        <div className="row"><Spinner className="mx-auto"/></div>
        :
            <div className="row">
        {datos.map((e) => (
          <div className="col-4">
            <ItemList
              id={e.id}
              nombre={e.nombre}
              precio={e.precio}
              desarrolladores={e.desarrolladores}
              img={e.img}
              stock={e.img}
            />
          </div>
        ))}
        
      </div>
      }


    </div>
  );
};

export default ItemListContainer;
