import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MechanicalSolutions = () => {
  const mechServices = [
    { title: '2D Drawings & 3D Assemblies', id: '2d-3d-assemblies' },
    { title: 'Strength & Fatigue Validation', id: 'strength-fatigue' },
    { title: 'Tolerance & Stress Analysis', id: 'tolerance-stress' },
    { title: 'Value Engineering & Product Costing', id: 'value-engineering' }
  ];

  return (
    <section id="mechanical-solutions" className="section" style={{ backgroundColor: '#000', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ flex: '1 1 500px' }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Mechanical <br/> Engineering & Design.
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
              Turning visionary concepts into validated realities. We deliver precision-engineered 3D models, complete manufacturing drawings, and rigorous design validations.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {mechServices.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Link 
                    to={`/mechanical-service/${item.id}`} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.2rem 0', 
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      transition: 'color 0.2s ease, padding-left 0.2s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '10px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.paddingLeft = '0px'; }}
                  >
                    {item.title}
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>Learn More &rarr;</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ 
              width: '100%', 
              aspectRatio: '1', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle at center, rgba(41, 151, 255, 0.2) 0%, rgba(0,0,0,0) 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                style={{
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(255,255,255,0.2)',
                  position: 'absolute'
                }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{
                  width: '60%',
                  height: '60%',
                  borderRadius: '50%',
                  border: '1px solid rgba(41, 151, 255, 0.3)',
                  position: 'absolute'
                }}
              />
              <h3 style={{ position: 'relative', zIndex: 10,  textAlign: 'center', fontWeight: '500', color: 'var(--color-text)' }}>
                Validation<br/>& Analysis
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalSolutions;
