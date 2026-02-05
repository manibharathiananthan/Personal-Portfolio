import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "12345") {
      localStorage.setItem("auth", true);
      setError("Login successful!");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Login</h2>
      {error && <Alert>{error}</Alert>}
      <Form onSubmit={handleLogin} className="p-4 shadow rounded bg-white">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </Form.Group>
        <Button type="submit" className="w-100">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
