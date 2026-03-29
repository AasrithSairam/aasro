import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <motion.div 
        className="container"
        style={{ textAlign: 'center', y: y1, opacity }}
      >
        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1.5rem', fontWeight: 700 }}
        >
          AASRO Solutions.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          style={{ color: 'var(--color-text)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 500, marginBottom: '2rem' }}
        >
          Engineering the Future. <br/> Designing the Exceptional.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <Link to="/about" className="button-primary" style={{ marginRight: '1rem' }}>
            Discover Our Vision
          </Link>
          <a href="#contact" className="button-secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
