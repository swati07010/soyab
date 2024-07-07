import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../images/logotp.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left-side">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="right-side">
          <button className="menu-button" onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/information" onClick={() => setMenuOpen(false)}>
                Information
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
