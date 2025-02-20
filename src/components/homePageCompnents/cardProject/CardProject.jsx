import React from "react";
import { Card } from "react-bootstrap";

function CardProject({image}) {
  return (
    <Card style={{ width:"100%", height:"100%" }}>
      <Card.Img variant="top" src={image} />
    </Card>
  );
}

export default CardProject;
