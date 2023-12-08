import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Widget 1</Card.Title>
              <Card.Text>Content for Widget 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Widget 2</Card.Title>
              <Card.Text>Content for Widget 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Widget 3</Card.Title>
              <Card.Text>Content for Widget 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;