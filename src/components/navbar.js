import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
    <div className="navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
};
 
export default Navbar