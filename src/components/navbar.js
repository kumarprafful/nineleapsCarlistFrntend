import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

class CarsNavbar extends Component{
  render() {
    return (
      <div style={{backgroundColor: '#343a4012'}}>
        <Navbar light expand="md">
          <NavbarBrand href="#">Cars' Listing</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink target="_blank" href="https://www.linkedin.com/in/praffulkumar/">By Prafful Kumar</NavLink>
              </NavItem>
            </Nav>

        </Navbar>
      </div>
    );
  }
}

export default CarsNavbar
