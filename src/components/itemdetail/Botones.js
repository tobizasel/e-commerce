import React from 'react'
import { Button, ButtonGroup } from "reactstrap";

export const Botones = ({cantidad, setCantidad, stock, agregar, isInCart}) => {

    let texto;

    const isStock = () => {
      if (stock === 0) {
        return true
      } else{
        return false
      }
    }

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
    <>
    <ButtonGroup>
    <Button className='btn-outline btn-lg' outline onClick={handlerRestar} disabled ={isInCart || isStock()}><b>-</b></Button>
    <Button className='btn-outline btn-lg' outline onClick={agregar} disabled={isInCart || isStock()}>{texto}</Button>
    <Button className='btn-outline btn-lg' outline onClick={handlerSumar} disabled  ={isInCart || isStock()}><b>+</b></Button>
    </ButtonGroup>
    </>
  )
}
