import React from 'react'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import Product from './Product'

export default function ShowElectronics(props) {

    let propProducts = props.products

    const electronicProducts = propProducts.filter(product => product.category === "Electronics")

    return (
        <CardDeck>
          <Container>
            <Row>
                {electronicProducts.map(product => 
                  <Col key={product.id} xs="4" md="4">
                    <Product key={product.id} product={product} deleteProduct={props.deleteProduct} addToCart={props.addToCart}/>
                  </Col>
                )}
            </Row>
          </Container>
        </CardDeck>
      );
    }
