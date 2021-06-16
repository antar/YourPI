import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container className="py-5">
      <Card className="mb-4">
        <Card.Header>Welcome to YourPI!</Card.Header>
        <Card.Body>
          <Card.Title>You are logged in.</Card.Title>
          <Card.Text>
            You won’t be able to access the home and account pages if you are
            not logged in.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Introduction</Card.Header>
        <Card.Body>
          <Card.Title>An unofficial take on the YourPI.</Card.Title>
          <Card.Text>This api serves as a construction kit.</Card.Text>
          <Card.Text>
            The repository can be found on{" "}
            <a href="https://github.com/antar/REST-API">Github</a>. By default
            there are products and categories. These can be modified with CRUD.
          </Card.Text>
          <Card.Text>
            The User Authentication is made with{" "}
            <a href="https://github.com/firebase/php-jwt">JWT</a>.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Usage</Card.Header>
        <Card.Body>
          <Card.Title>Read Products</Card.Title>
          <Card.Text>
            POST Products with http://localhost/api/product/read.php
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
