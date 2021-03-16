import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import logo from '../logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar" sticky="top">
        <Navbar.Brand href="/home">
          <img
            style={{
              objectFit: 'cover',
              height: '50px',
              backgroundColor: 'transparent',
            }}
            src={logo}
          />
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">iShareBooks</Navbar.Brand> */}
        <Nav className="ml-auto ">
          <Link
            className="nav_link"
            style={{
              color: '#D3D3D3',
              textDecoration: 'none',
              marginRight: '20px',
              cursor: 'pointer',
            }}
            to="about"
            smooth={true}
            duration={1000}
          >
            About
          </Link>
          <Link
            className="nav_link"
            style={{
              color: '#D3D3D3',
              textDecoration: 'none',
              marginRight: '20px',
              cursor: 'pointer',
            }}
            to="services"
            smooth={true}
            duration={1000}
          >
            Services
          </Link>
          <Link
            className="nav_link"
            style={{
              color: '#D3D3D3',
              textDecoration: 'none',
              marginRight: '20px',
              cursor: 'pointer',
            }}
            to="faq"
            smooth={true}
            duration={1000}
          >
            FAQ
          </Link>
          <Link
            className="nav_link"
            style={{
              color: '#D3D3D3',
              textDecoration: 'none',
              marginRight: '20px',
              cursor: 'pointer',
            }}
            to="#login"
          >
            Log In
          </Link>
        </Nav>

        <Button variant="success" href="/registration">
          Sign Up
        </Button>
      </Navbar>
    </>
  );
};

export default Navigation;
