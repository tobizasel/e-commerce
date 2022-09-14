import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

const ItemList = (props) => {
  
  const {id, nombre, precio, desarrolladores, img, stock} = props;

  let navigate = useNavigate();
  let texto

    const handleNavigation = () => {
        navigate(`/detail/${id}`)
    }

    const cambiarTexto = () =>{
      if (precio === 0) {
         texto = "GRATIS"
      } else{
         texto = `$${precio}`
      }
   }
  
    cambiarTexto();

    return (

    <Card
    className="my-2 text-center"
    style={{
      width: '18rem',
      height: '520px'
    }}
  >
    <img src={img} height="300"/>
    <CardBody>
      <CardTitle tag="h5">
        {nombre}
      </CardTitle>
      <CardText>
        Desarrollado por: <b>{desarrolladores}</b>
      </CardText>
      <Button onClick={handleNavigation}>
        Comprar
      </Button>
    </CardBody>
    <CardFooter className="">
      <b>{texto}</b>
    </CardFooter>
  </Card>
  )
}

export default ItemList