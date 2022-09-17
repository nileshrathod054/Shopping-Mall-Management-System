import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <h2> Home</h2>
          </NavLink>
          <NavLink to="/about" activeStyle>
            <h2> About</h2>
          </NavLink>
          <NavLink to="/contact" activeStyle>
            <h2>Contact</h2>
          </NavLink>

          <NavLink to="/shop" activeStyle>
            <h2>Shop</h2>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
