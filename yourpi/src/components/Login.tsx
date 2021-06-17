import { FormEvent, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router";
import useAuthTenet from "../hooks/useAuthTenet";
import { login } from "../lib/api";

export default function Login() {
  useAuthTenet();

  const history = useHistory();

  const [isSubmitting, setSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");
    login(email, password)
      .then(() => history.push("/"))
      .catch((error) =>
        setErrorMessage(error.message || "Login failed! Please try again.")
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="py-5">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <h1 className="mb-4">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
