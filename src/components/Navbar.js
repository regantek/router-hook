import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="logo" to="/">
        Brand-Logo
      </NavLink>
      <div className="nav-links">
        <NavLink className="link" activeClassName="selectedPage" to="/about">
          About
        </NavLink>

        <NavLink className="link" activeClassName="selectedPage" to="/contact">
          Contact
        </NavLink>

        <NavLink className="link" activeClassName="selectedPage" to="/blog">
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
