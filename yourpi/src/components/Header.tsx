import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { AuthState } from "../redux/reducers/authReducer";
import { RootState } from "../redux/reducers/rootReducer";
import store from "../redux/store";

export default function Header() {
  const history = useHistory();

  const authState = useSelector<RootState, AuthState>((state) => state.auth);

  const handleLogout = () => {
    store.dispatch({ type: "SET_TOKEN", payload: undefined });
    history.push("/login");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>YourPI</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          {authState.user ? (
            <>
              <LinkContainer to="/account">
                <Nav.Link>Account</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
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
