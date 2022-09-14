import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.scss'
import CartCard from './CartCard'
import CarritoVacio from './CarritoVacio'

const Cart = () => {

  const {cart, vaciarCarrito} = useContext(CartContext)

  return (
    <div className='container mt-5 cart'>
      <h2 className='cart__title'>CARRITO DE COMPRAS</h2>

        {
          cart[0] ?
          <>{cart.map((item) => (
            <CartCard id={item.id} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad} imagen={item.img}/>
          ))}
          <div className='cart__botones'>
          <button className='btn btn-outline-success mt-5 button__comprarTodo'>COMPRAR TODO</button>
          <button className='btn btn-outline-danger mt-5 button__vaciar' onClick={vaciarCarrito}>VACIAR CARRITO</button>
          </div>
          </>
          : <CarritoVacio/>
          
        }
        

          
    </div>
      
  )
}

export default Cart