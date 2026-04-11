import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((previous) => !previous);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen && window.innerWidth <= 768);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const getNavLinkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">ENACTUS <span className="text-yellow">MLNC</span></span>
        </Link>
        
        <button
          className={`mobile-menu-btn${isOpen ? ' is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`navbar-backdrop${isOpen ? ' open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <ul id="site-navigation" className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={getNavLinkClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={getNavLinkClass} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/projects" className={getNavLinkClass} onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/team" className={getNavLinkClass} onClick={closeMenu}>Team</NavLink></li>
          <li><NavLink to="/achievements" className={getNavLinkClass} onClick={closeMenu}>Achievements</NavLink></li>
          <li><NavLink to="/contact" className={getNavLinkClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
