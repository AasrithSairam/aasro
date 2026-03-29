import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '2rem' }}>About Us.</h2>
          
          <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
            We carry on the business of providing <span className="text-gradient">engineering, technical, design, and consultancy services</span>. 
            From conception to reality, we bridge the gap between complex challenges and innovative solutions. 
          </p>
          <br/>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            Our expertise spans multiple disciplines, integrating advanced data science and IT capabilities with profound mechanical engineering prowess to deliver transformative results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
