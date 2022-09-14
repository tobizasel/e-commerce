import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './nav.scss'

const CartIcon = () => {

  const { cantidadCart } = useContext(CartContext)

  return (
    <div className='cartIcon'>
      <i className='fa-solid fa-cart-shopping'></i>
      <h6>cart ({cantidadCart()})</h6>
    </div>
  )
}

export default CartIcon