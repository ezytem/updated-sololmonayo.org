import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
    home: false,
    foundation: false,
    competition: false,
  });

  const handleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/n-logo.webp" alt="Logo" className="logo-image" />
        </Link>
        <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className="nav-item"
            onMouseEnter={() => handleDropdown('home')}
            onMouseLeave={() => handleDropdown('home')}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home <i className="fa fa-caret-down" />
            </Link>
            {dropdown.home && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about" className="dropdown-link" onClick={closeMobileMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="dropdown-link" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleDropdown('foundation')}
            onMouseLeave={() => handleDropdown('foundation')}
          >
            <Link to="/howwe" className="nav-links" onClick={closeMobileMenu}>
              S.A Foundation <i className="fa fa-caret-down" />
            </Link>
            {dropdown.foundation && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/sa-book-store" className="dropdown-link" onClick={closeMobileMenu}>
                    S.A Book Store
                  </Link>
                </li>
                <li>
                  <Link to="/reader-club" className="dropdown-link" onClick={closeMobileMenu}>
                    The Reader Club
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleDropdown('competition')}
            onMouseLeave={() => handleDropdown('competition')}
          >
            <Link to="/competition" className="nav-links" onClick={closeMobileMenu}>
              Annual Book Competition <i className="fa fa-caret-down" />
            </Link>
            {dropdown.competition && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/vision" className="dropdown-link" onClick={closeMobileMenu}>
                    The Vision
                  </Link>
                </li>
                <li>
                  <Link to="/previous-editions" className="dropdown-link" onClick={closeMobileMenu}>
                    Previous Editions
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="dropdown-link" onClick={closeMobileMenu}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="dropdown-link" onClick={closeMobileMenu}>
                    FAQs
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
