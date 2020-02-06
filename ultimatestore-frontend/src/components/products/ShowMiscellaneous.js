import React from 'react'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import Product from './Product'
import CategoryNav from '../navigation/CategoryNav'

export default function ShowMiscellaneous(props) {

    let propProducts = props.products

    const miscellaneousProducts = propProducts.filter(product => product.category === "Miscellaneous")

    return (
      <>
        <CategoryNav/>
          <CardDeck>
            <Container>
              <Row>
                  {miscellaneousProducts.map(product => 
                    <Col key={product.id} xs="4" md="4">
                      <Product key={product.id} product={product} deleteProduct={props.deleteProduct} addToCart={props.addToCart}/>
                    </Col>
                  )}
              </Row>
            </Container>
          </CardDeck>
        </>
      );
    }
