import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const LibraryItem = ({ nombre, desarrolladores, img }) => {
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
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>

          <button className="btn btn-secondary">
            Jugar
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default LibraryItem;
