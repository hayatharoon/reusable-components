import React from 'react';
import { Container, Nav, Navbar, ButtonGroup, Dropdown, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const navbarItems = ['Home', 'Features', 'About', 'Contact Us'];

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Atrilogic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navbarItems.map((item, key) => {
                return (
                  <Nav.Link className="mx-2" href={`#${item}`} key={key}>
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark">Drop Down</Button>
            <Dropdown.Toggle variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu>
              {['History', 'Settings', 'User', 'Help', 'Exist'].map((item, key) => {
                return (
                  <Dropdown.Item href={`#/${item}`} key={key}>
                    {item}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
