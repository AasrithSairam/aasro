import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'IT Solutions', path: '/it-solutions' },
    { name: 'Mechanical', path: '/mechanical' },
    { name: 'Educations', path: '/education' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        background: 'rgba(29, 29, 31, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2.5rem',
        margin: 0,
        padding: 0
      }}>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.name}>
              <Link 
                to={link.path}
                style={{
                  color: isActive ? '#fff' : 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '500' : '400',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
