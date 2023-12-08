// Homepage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './styles.scss';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'https://picsum.photos/200/300' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'https://picsum.photos/200/300' },
  // Add more products as needed
];

const Homepage = () => {
  return (
    <Container fluid className="homepage-container">
    {/* Header section */}
    <header>
      <h1>My Online Store</h1>
    </header>

    {/* Featured products section */}
    <section className="featured-products">
      <h2>Featured Products</h2>
      <Row xs={1} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" href={`/product/${product.id}`}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>

    {/* Footer section */}
    <footer>
      <p>&copy; 2023 My Online Store</p>
    </footer>
  </Container>
  );
};

export default Homepage;
