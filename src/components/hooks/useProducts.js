import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const useProducts = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

  let { generoId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    const q = generoId ? query(productosRef, where("genero", "==", generoId)) : productosRef

    getDocs(q)
      .then((res) => {
        const productosDB = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatos(productosDB);
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [generoId]);

  return({
    datos, loading
  })
}