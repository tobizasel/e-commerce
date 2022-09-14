import React from 'react'
import { Link } from 'react-router-dom'

const CarritoVacio = () => {
  return (
    <div className='container cartVacio'>
        <img src='./assets/carrito.png' className='cartVacio__imagen'/>
        
        <div className='cartVacio__textos'>
            <h4>Tu carrito de compras esta vacio</h4>
            <h6>Agrega productos en la TIENDA!</h6>
        </div>

        <Link to='/'><button className='btn btn-success'>Volver a la tienda</button></Link>

    </div>
  )
}

export default CarritoVacio