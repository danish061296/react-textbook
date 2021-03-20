import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from '../logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar bg="" variant="dark" className="navbar-first" sticky="top">
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

        <Button variant="outline-success signup-btn" href="/registration">
          Sign Up
        </Button>
      </Navbar>

      <div className="navbar-second">
        <h1 className="navbar-logo">
          <a href="/home">iShareBooks</a>
        </h1>
        <div className="navbar-icons">
          <ShoppingCartIcon />
          <FavoriteIcon />
        </div>
      </div>

      {/* <Navbar bg="" variant="dark" className="navbar-second">
        <Navbar.Brand href="/home" className="navbar-logo">
          iShareBooks
        </Navbar.Brand>
        <div className="navbar-icons">
          <ShoppingCartIcon />
          <FavoriteIcon />
        </div>
      </Navbar> */}
    </>
  );
};

export default Navigation;
