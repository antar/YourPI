import { FormEvent, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import useAuthTenet from "../hooks/useAuthTenet";
import { signUp } from "../lib/api";

export default function SignUp() {
  useAuthTenet();

  const [isSubmitting, setSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    signUp(firstname, lastname, email, password)
      .then(() =>
        setSuccessMessage("Your account has successfully been created!")
      )
      .catch((error) =>
        setErrorMessage(
          error.message ||
            "An unknown error occured while creating your account!"
        )
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="py-5">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <h1 className="mb-4">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formSignUpFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSignUpLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
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
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
