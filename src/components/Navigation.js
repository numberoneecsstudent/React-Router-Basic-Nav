import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem } from 'reactstrap';


const Navigation = () => {
  return (
    <div>
      <Nav className="App">
      <NavItem>
      <Link to="/" className="Nav-link">Home</Link>
      </NavItem>
      <NavItem>
      <Link to="/contact" className="Nav-link">Contact</Link>
      </NavItem>
      <NavItem>
      <Link to="/about" className="Nav-link">About </Link>
      </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
