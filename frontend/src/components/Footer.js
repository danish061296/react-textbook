import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar color="" dark style={{ height: '300px', background: '#F5F5F7' }}>
        <Container>
          <NavbarBrand style={{ color: 'black' }}>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
