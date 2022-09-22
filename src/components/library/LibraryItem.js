import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import './library.scss'

const LibraryItem = ({ nombre, desarrolladores, img, fecha }) => {

  const eliminarProducto = () => {
    
  }

  return (
    <div className="container">
      <Card className="my-2">
        <CardImg
          alt={nombre}
          src={img}
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{nombre}</CardTitle>
          <CardText>
            {desarrolladores}
          </CardText>
          <CardText>
            <small className="text-muted">{fecha}</small>
          </CardText>
          <div className="library__botones">
          <button className="btn btn-secondary">
            Jugar
          </button>

          <button className="btn btn-danger" onClick={eliminarProducto}>
            Eliminar
          </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LibraryItem;
