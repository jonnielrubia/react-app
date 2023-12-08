// components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.scss';

const ProductDetails = () => {
  const { id } = useParams();
  // Fetch product details based on the id

  const product = {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
    image: 'https://picsum.photos/200/300',
  };

  return (
    <Container fluid className="product-details-container">
      {/* Product details section */}
      <section className="product-details">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={product.image} />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default ProductDetails;
