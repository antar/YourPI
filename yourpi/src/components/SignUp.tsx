import React, { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { signUp } from "../lib/api";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(firstname, lastname, email, password);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formSignUpFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignUpLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignUpEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignUpPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
