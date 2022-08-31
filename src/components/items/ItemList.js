import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap'

const ItemList = (props) => {
  
  const {id, nombre, precio, desarrolladores, img, stock} = props;
  
    return (

    <Card
    className="my-2 text-center"
    style={{
      width: '18rem'
    }}
  >
    <img src={img} height="300"/>
    <CardBody>
      <CardTitle tag="h5">
        {nombre}
      </CardTitle>
      <CardText>
        Desarrollador por: <b>{desarrolladores}</b>
      </CardText>
      <Button >
        Comprar
      </Button>
    </CardBody>
    <CardFooter>
      ${precio}
    </CardFooter>
  </Card>
  )
}

export default ItemList