import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { AuthState } from "../redux/reducers/authReducer";
import { RootState } from "../redux/reducers/rootReducer";

export default function Header() {
  const isLoggedIn = useSelector<RootState, AuthState["isLoggedIn"]>(
    (state) => state.auth.isLoggedIn
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>YourPI</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          {isLoggedIn ? (
            <></>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sign-up">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
