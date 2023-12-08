import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.scss';
// interface LoginProps {
//   onLogin: () => void;
// }

// interface LoginPageProps {
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

const LoginPage: React.FC= () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Implement your authentication logic here
    // For simplicity, we're just checking if the username and password are not empty.

    if (username.trim() !== "" && password.trim() !== "") {
      // Simulate a successful login
      console.log(
        `Logging in with username: ${username} and password: ${password}`
      );
      // setLoggedIn(true);
    } else {
      // Handle authentication failure
      alert("Invalid credentials");
    }
  };

  return (
    <Container className="custom-container">
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <h2 className="text-center mb-4">Login</h2>
        <Form className="custom-form">
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default LoginPage;
