import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
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
        <NavLink className="link" activeClassName="selectedPage" to="/admin">
          Admin
        </NavLink>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
