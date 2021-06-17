import { Formik, FormikHelpers } from "formik";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import useAuthProtecton from "../hooks/useAuthProtection";
import { updateUser } from "../lib/api";

export default function ManageAccount() {
  const [user] = useAuthProtecton();

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
    updateUser(
      values.firstname,
      values.lastname,
      values.email,
      values.password
    ).then(() => {
      setSubmitting(false);
    });
  };

  return (
    <Container className="py-5">
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
