import { useState } from "react";
import { FiArrowRight, FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <nav>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            F<span>OO</span>D
          </Link>
          <button className="navbar-toggle" aria-label="Toggle menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu /> }
          </button>
          <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <ul className="navbar-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div className="navbar-actions">
              <button aria-label="Search">
                <FiSearch />
              </button>
              <div className="navbar-cart">
                <FiShoppingCart />
                {cartCount > 0 && <span>{cartCount}</span>}
              </div>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up{" "}
                <span>
                  <FiArrowRight />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
