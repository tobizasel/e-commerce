import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { PedirDatos } from "../helpers/PedirDatos";
import { useNavigate, useParams } from "react-router-dom";

const ItemListContainer = () => {

  
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true)
  const {precioID} = useParams();

  console.log("parametro:" + precioID);

  useEffect(() => {
    setLoading(true)
    PedirDatos()
      .then((res) => {
        if (!precioID) {
          setDatos(res)
        } else{
          setDatos(res.filter ((e) => e.idPrecio === precioID))
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [precioID]);

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
