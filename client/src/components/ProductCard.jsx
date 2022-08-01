import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "5%" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h5> {product.price} </h5>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
