import React from 'react';
import { Container, Nav, Navbar, ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import styles from './navbar.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const CustomNavbar = () => {
  const navbarItems = ['Home', 'Features', 'About', 'Contact-Us'];

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className={cx(styles.navbar, '')}>
        <Container>
          <Navbar.Brand href="/" className={cx(styles.navbarBrand, 'fw-bold')}>
            Atrilogic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={cx(styles.navbarItem, 'me-auto')}>
              {navbarItems.map((item, key) => {
                return (
                  <Nav.Link className="mx-2" href={`#${item.toLocaleLowerCase()}`} key={key}>
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Dropdown as={ButtonGroup}>
            <Button variant="dark" className={styles.navbarDropDownButton}>
              Drop Down
            </Button>
            <Dropdown.Toggle variant="dark" id="dropdown-split-basic" />

            <Dropdown.Menu className={styles.navbarItem}>
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
