import { FunctionComponent } from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const AppFooter: FunctionComponent = () => {
  return (
    <Navbar
      fixed="bottom"
      bg="light"
      expand="md"
      variant="light"
      className="app-footer"
    >
      <Container>
        <Navbar.Text>MIT Licensed</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Col />
          <Nav>
            <LinkContainer to="/imprint" exact>
              <Nav.Link>Imprint</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/privacy" exact>
              <Nav.Link>Privacy</Nav.Link>
            </LinkContainer>
            <Nav.Link
              href="https://github.com/ZapCupy/relaxdays-challenge-gift-inspirator/"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
