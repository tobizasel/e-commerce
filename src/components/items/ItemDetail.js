import React from 'react'
import { useParams } from 'react-router-dom'
import productos from '../products.json'

const ItemDetail = () => {

  let {ID} = useParams(); 
  
  console.log(productos);

   const filtrado = productos.filter(producto => {
    return producto.id == ID;
  });


    console.log("El ID es: " + ID);
    console.log("filtrado " + filtrado.json);

  return (
    <div className='container'>
        <div className='row'></div>        
            <h2 className='col-8'>{}</h2>
    </div>
  )
}

export default ItemDetail