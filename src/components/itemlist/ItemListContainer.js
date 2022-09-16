import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./itemlist.scss";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  let { generoId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = generoId ? query(productosRef, where("genero", "==", generoId)) : productosRef

    getDocs(q)
      .then((res) => {
        const productosDB = res.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
        setDatos(productosDB)
    })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [generoId]);
  

  return (
    <div className="container list__container mt-5">
      {loading ? (
        <div className="row">
          <Spinner className="mx-auto" />
        </div>
      ) : (
        <div className="row list__container">
          {datos.map((e) => (
            <div className="col-4 list__container">
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
      )}
    </div>
  );
}

export default ItemListContainer
