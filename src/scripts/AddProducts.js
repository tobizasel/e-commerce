import { addDoc, collection } from "firebase/firestore";
import React, {useState} from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

export const AddProducts = () => {
  const productosRef = collection(db, "productos");

  const [valores, setValores] = useState({
    nombre: "",
    precio: "",
    genero: "",
    stock: "",
    desarrolladores: "",
    img: "",
    carrusel_1: "",
    carrusel_2: "",
    carrusel_3: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addDoc(productosRef, valores)
        .then(() => toast.success("Producto agregado a la DataBase"))
        .catch((err) => toast.error("Error: " + err))
  };

  const handleInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login__container">
      <section className="form-register">
        <h4>Agregar productos</h4>
        <input
          className="controls"
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="number"
          name="precio"
          placeholder="Precio"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="text"
          name="genero"
          placeholder="Genero"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="text"
          name="desarrolladores"
          placeholder="Desarrolladores"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="number"
          name="stock"
          placeholder="stock"
          required
          onChange={handleInput}
        />
        <input
          className="controls"
          type="text"
          name="img"
          placeholder="imagen"
          required
          onChange={handleInput}
        />
                <input
          className="controls"
          type="text"
          name="carrusel_1"
          placeholder="carrusel_1"
          required
          onChange={handleInput}
        />
                <input
          className="controls"
          type="text"
          name="carrusel_2"
          placeholder="carrusel_2"
          required
          onChange={handleInput}
        />
                <input
          className="controls"
          type="text"
          name="carrusel_3"
          placeholder="carrusel_3"
          required
          onChange={handleInput}
        />

        <input
          className="botons"
          type="submit"
          value="Agregar producto"
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
};
