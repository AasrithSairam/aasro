import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Educations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const edPrograms = [
    { title: '+1 & +2 Students', id: 'high-school', desc: 'Specialized coaching in Mathematics and Physics, providing a solid foundation for competitive exams and higher studies.' },
    { title: 'Engineering Students', id: 'engineering', desc: 'Advanced coaching in Engineering Mathematics and connected subjects to support academic excellence.' }
  ];

  return (
    <section ref={ref} id="educations" className="section" style={{ backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          style={{ scale, opacity, background: 'linear-gradient(145deg, rgba(29,29,31,0.8) 0%, rgba(0,0,0,0.8) 100%)', borderRadius: '2rem', padding: '5rem 3rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '1.5rem' }}
          >
            Empowering the Next Generation.
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 4rem auto' }}
          >
            Expert coaching and education for school and college students, designed to foster deep understanding and analytical thinking.
          </motion.p>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {edPrograms.map((prog, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} style={{ flex: '1 1 300px', maxWidth: '400px', display: 'flex' }}>
                <Link 
                  to={`/education-service/${prog.id}`}
                  style={{ 
                    width: '100%',
                    padding: '3rem 2rem', 
                    backgroundColor: 'var(--color-bg)', 
                    borderRadius: '1.5rem', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                    color: 'inherit',
                    textAlign: 'left'
                  }}
                >
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>{prog.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{prog.desc}</p>
                  <div style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: '0.9rem' }}>
                    View Syllabus Details &rarr;
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Educations;
