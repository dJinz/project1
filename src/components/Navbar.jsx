import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section scroll spy
      const sections = ['about', 'projects', 'certificates', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is currently visible in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      // Special case for bottom of the page
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      } else if (window.scrollY === 0) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const getLinkStyle = (section) => {
    const isActive = activeSection === section;
    return {
      fontWeight: 500,
      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
      transition: 'all 0.3s ease',
      border: isActive ? '1px solid var(--text-primary)' : '1px solid transparent'
    };
  };

  const handleMouseOver = (e, section) => {
    if (activeSection !== section) {
      e.target.style.color = 'var(--text-primary)';
      e.target.style.backgroundColor = 'var(--bg-secondary)';
    }
  };

  const handleMouseOut = (e, section) => {
    if (activeSection !== section) {
      e.target.style.color = 'var(--text-secondary)';
      e.target.style.backgroundColor = 'transparent';
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled || mobileMenuOpen ? 'var(--bg-secondary)' : 'transparent',
        boxShadow: scrolled && !mobileMenuOpen ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        padding: '1.5rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container flex-between">
          <a href="#about" onClick={closeMobileMenu} style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px', color: 'var(--text-primary)', textDecoration: 'none', zIndex: 101 }}>
            ROBLE<span style={{ color: 'var(--text-secondary)' }}>.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#about" style={getLinkStyle('about')} onMouseOver={e => handleMouseOver(e, 'about')} onMouseOut={e => handleMouseOut(e, 'about')}>Home</a>
            <a href="#projects" style={getLinkStyle('projects')} onMouseOver={e => handleMouseOver(e, 'projects')} onMouseOut={e => handleMouseOut(e, 'projects')}>Projects</a>
            <a href="#certificates" style={getLinkStyle('certificates')} onMouseOver={e => handleMouseOver(e, 'certificates')} onMouseOut={e => handleMouseOut(e, 'certificates')}>Certificates</a>
            <a href="#contact" style={getLinkStyle('contact')} onMouseOver={e => handleMouseOver(e, 'contact')} onMouseOut={e => handleMouseOut(e, 'contact')}>Contact</a>
            <button 
              onClick={toggleTheme}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="mobile-controls" style={{ display: 'none', gap: '0.5rem', alignItems: 'center', zIndex: 101 }}>
            <button 
              onClick={toggleTheme}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={toggleMobileMenu}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease'
              }}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop — clicking it closes the menu */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMobileMenu} className={activeSection === 'about' ? 'active-link' : ''}>Home</a>
        <a href="#projects" onClick={closeMobileMenu} className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a>
        <a href="#certificates" onClick={closeMobileMenu} className={activeSection === 'certificates' ? 'active-link' : ''}>Certificates</a>
        <a href="#contact" onClick={closeMobileMenu} className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
