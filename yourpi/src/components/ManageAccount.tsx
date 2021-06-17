import { Formik, FormikHelpers } from "formik";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import useAuthProtecton from "../hooks/useAuthProtection";
import { updateUser } from "../lib/api";

export default function ManageAccount() {
  const [user] = useAuthProtecton();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    password: ""
  };

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    updateUser(values.firstname, values.lastname, values.email, values.password)
      .then(() =>
        setSuccessMessage("Your account has successfully been updated!")
      )
      .catch(() =>
        setErrorMessage("An unknown error occured while updating your account!")
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="py-5">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <h1 className="mb-4">Manage Account</h1>
      {user && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({
            handleSubmit,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="formManageAccountFirstname"
              >
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formManageAccountLastname"
              >
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formManageAccountEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formManageAccountPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Save Changes
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
}
