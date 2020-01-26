import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import ShowProduct from './ShowProduct'

class Product extends Component {

  render() {
    const { product } = this.props;
    
    return (
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={product.image} height="100px" width="50px"/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <ShowProduct product={product}></ShowProduct>
        </Card.Body>
      </Card>
    );
  }
};

export default Product;