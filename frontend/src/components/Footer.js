import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar color="dark" dark style={{ height: '300px' }}>
        <Container>
          <NavbarBrand style={{ color: 'white' }}>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
