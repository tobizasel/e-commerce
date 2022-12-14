import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Spinner } from "reactstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
  let { itemID } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const itemRef = doc(db, 'productos', itemID)
    getDoc(itemRef)
      .then((doc) => {
        setItem({id: doc.id, ...doc.data()})
      })
      .finally(() => {
        setLoading(false)
      })

  }, [itemID]);

  

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
