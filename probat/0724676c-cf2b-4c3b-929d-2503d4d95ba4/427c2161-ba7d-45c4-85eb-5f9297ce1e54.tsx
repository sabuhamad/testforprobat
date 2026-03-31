import React, { useState } from 'react';
import '../../src/components/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        .header-theme-variant-h {
          --header-bg: #667EEA;
          --header-text: #F7FAFC;
          --nav-brand-color: #F7FAFC;
          --nav-link-color: #F7FAFC;
          --nav-link-hover-color: #F6E05E;
          --btn-outline-border: #F6E05E;
          --btn-outline-text: #F6E05E;
          --btn-primary-bg: #F6E05E;
          --btn-primary-text: #000000;
          --mobile-menu-toggle-color: #F7FAFC;
        }
        .header.header-theme-variant-h {
          background-color: var(--header-bg);
          color: var(--header-text);
        }
        .header.header-theme-variant-h .nav-brand h2 {
          color: var(--nav-brand-color);
        }
        .header.header-theme-variant-h .nav-link {
          color: var(--nav-link-color);
        }
        .header.header-theme-variant-h .nav-link:hover {
          color: var(--nav-link-hover-color);
        }
        .header.header-theme-variant-h .btn-outline {
          border-color: var(--btn-outline-border);
          color: var(--btn-outline-text);
        }
        .header.header-theme-variant-h .btn-primary {
          background-color: var(--btn-primary-bg);
          color: var(--btn-primary-text);
        }
        .header.header-theme-variant-h .mobile-menu-toggle span {
          background-color: var(--mobile-menu-toggle-color);
        }
      `}</style>
      <header className="header header-theme-variant-h">
        <div className="container">
          <div className="nav-brand">
            <h2>Brand</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-outline">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;