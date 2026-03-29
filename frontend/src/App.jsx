import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScroll, useSpring, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ITPage from './pages/ITPage';
import MechanicalPage from './pages/MechanicalPage';
import EducationPage from './pages/EducationPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import MechanicalDetailsPage from './pages/MechanicalDetailsPage';
import EducationDetailsPage from './pages/EducationDetailsPage';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--color-text)',
          transformOrigin: '0%',
          zIndex: 2000,
        }}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/it-solutions" element={<ITPage />} />
          <Route path="/mechanical" element={<MechanicalPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/service/:id" element={<ServiceDetailsPage />} />
          <Route path="/mechanical-service/:id" element={<MechanicalDetailsPage />} />
          <Route path="/education-service/:id" element={<EducationDetailsPage />} />
        </Routes>
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>&copy; {new Date().getFullYear()} AASRO Solutions. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
