import { FunctionComponent } from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const AppNav: FunctionComponent = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
      className="app-nav"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Gift inspirator</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};
