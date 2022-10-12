import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './nav.scss'

const CartIcon = () => {

  const { cantidadCart } = useContext(CartContext)

  return (
    <button className='cartIcon btn btn-outline-dark' outline>
      <h6><i className='fa-solid fa-cart-shopping'></i>carrito ({cantidadCart()})</h6>
    </button>
  )
}

export default CartIcon