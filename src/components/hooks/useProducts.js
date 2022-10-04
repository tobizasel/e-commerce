import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const useProducts = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [biblioteca, setBiblioteca] = useState(false) 
  
  let { generoId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");

    let q = query(productosRef, where("comprado", "==", false));

    if (generoId === "library") {
      q = query(productosRef, where("comprado", "==", true));
      setBiblioteca(true)
    } else {
      q = generoId
        ? query(q, where("genero", "==", generoId))
        : q;
        setBiblioteca(false)
    }

    getDocs(q)
      .then((res) => {
        console.log("LLAMADO EN USEPRODUCTS")
        const productosDB = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatos(productosDB);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [generoId]);

  return({
    datos, loading, biblioteca
  })
}