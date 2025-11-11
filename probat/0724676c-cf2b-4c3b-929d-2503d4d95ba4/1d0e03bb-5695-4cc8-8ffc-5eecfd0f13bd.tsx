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
        .header-theme-variant-i {
          --header-bg: #F7FAFC;
          --header-text: #4A5568;
          --nav-brand-color: #000000;
          --nav-link-color: #4A5568;
          --nav-link-hover-color: #667EEA;
          --btn-outline-border: #667EEA;
          --btn-outline-text: #667EEA;
          --btn-primary-bg: #667EEA;
          --btn-primary-text: #F7FAFC;
          --mobile-menu-toggle-color: #4A5568;
        }
        .header.header-theme-variant-i {
          background-color: var(--header-bg);
          color: var(--header-text);
        }
        .header.header-theme-variant-i .nav-brand h2 {
          color: var(--nav-brand-color);
        }
        .header.header-theme-variant-i .nav-link {
          color: var(--nav-link-color);
        }
        .header.header-theme-variant-i .nav-link:hover {
          color: var(--nav-link-hover-color);
        }
        .header.header-theme-variant-i .btn-outline {
          border-color: var(--btn-outline-border);
          color: var(--btn-outline-text);
        }
        .header.header-theme-variant-i .btn-primary {
          background-color: var(--btn-primary-bg);
          color: var(--btn-primary-text);
        }
        .header.header-theme-variant-i .mobile-menu-toggle span {
          background-color: var(--mobile-menu-toggle-color);
        }
      `}</style>
      <header className="header header-theme-variant-i">
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