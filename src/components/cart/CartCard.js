import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartCard = ({ id, nombre, precio, cantidad, imagen }) => {

  const {eliminarItem} = useContext(CartContext)


  return (
    <div className="container mt-5 cart__card">
      
      <div className="col-2 card__container">
        <img src={imagen} alt={`${nombre} portada`}className="cart__img"></img>
      </div>
      
      <div className="col-4 card__container">
        <h4 className="card__title">{nombre.toUpperCase()}</h4>
      </div>

      <div className="col-2 card__container">
        <h4>${precio}</h4>
      </div>

      <div className="col-2 card__container">
        <h4>${precio*cantidad} (x{cantidad})</h4>
      </div>

      <div className="col-2 card__container">
        <button className=" btn btn-primary">COMPRAR</button>
        <button className="btn btn-danger card__delete" onClick={() => eliminarItem(id)}><i className="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  );
};

export default CartCard;
