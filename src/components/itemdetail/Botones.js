import React from 'react'
import { Button, ButtonGroup } from "reactstrap";

export const Botones = ({cantidad, setCantidad, stock, agregar, isInCart}) => {

    let texto;

    const handlerRestar = () => {
        if (cantidad > 1) {
          setCantidad(cantidad-1)
        }
      }
    
      const handlerSumar = () => {
        if (cantidad < stock) {
          setCantidad(cantidad+1)
        }
      }

      const cambiarTexto = () =>{
         if (cantidad === 1) {
            texto = 'COMPRAR'
         } else{
            texto = `COMPRAR x${cantidad}`
         }
      }

      cambiarTexto();

      


  return (
    <ButtonGroup className="mt-5">
    <Button className='btn-outline btn-lg' outline onClick={handlerRestar}><b>-</b></Button>
    <Button className='btn-outline btn-lg' outline onClick={agregar}>{texto}</Button>
    <Button className='btn-outline btn-lg' outline onClick={handlerSumar}><b>+</b></Button>
    </ButtonGroup>
  )
}
