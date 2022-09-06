import React from 'react'
import Carrousel from './Carrousel'
const ItemDetail = ({nombre, id, precio, desarrolladores, img, stock, carrusel_1, carrusel_2, carrusel_3}) => {
  
  return (
    <div className='container mt-5'>
    <div className='row'>
      <h2 className='col-10'>{nombre}</h2>
      <h2 className='col-2'>${precio}</h2>
    </div>
    <Carrousel className="mt-5" foto_1={carrusel_1} foto_2={carrusel_2} foto_3={carrusel_3}/>
    

    </div>


  )
}

export default ItemDetail