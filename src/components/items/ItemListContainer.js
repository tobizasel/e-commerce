import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Star Wars: Jedi Fallen Order",
    precio: 1500,
    desarrolladores: "Respawn Entertainment",
    img: "./assets/fallen-order.webp",
    stock: 5,
  },
  {
    id: 2,
    nombre: "Elden Ring",
    precio: 2200,
    desarrolladores: "FromSoftware",
    img: "./assets/elden-ring.webp",
    stock: 1,
  },
  {
    id: 3,
    nombre: "God of War",
    precio: 4400,
    desarrolladores: "SCE Santa Monica Studio",
    img: "./assets/god-of-war.jfif",
    stock: 7,
  },
  {
    id: 4,
    nombre: "Multiversus",
    precio: 0,
    desarrolladores: "Player First Games",
    img: "./assets/multiversus.jpg",
    stock: 12,
  },
  {
    id: 5,
    nombre: "Horizon Zero Dawn",
    precio: 3800,
    desarrolladores: "Guerrilla Games",
    img: "./assets/horizon.webp",
    stock: 5,
  },
  {
    id: 6,
    nombre: "Hogwarts: Legacy",
    precio: 6000,
    desarrolladores: "Avalanche Software",
    img: "./assets/hogwarts.jfif",
    stock: 0,
  },
];

const ItemListContainer = () => {
  const getDatos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    getDatos()
      .then((res) => setDatos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-3">
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
    </div>
  );
};

export default ItemListContainer;
