import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cloud, Layout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ITSolutions = () => {
  const services = [
    { id: 'web-apps', icon: <Globe size={32} />, title: "Web & Desktop Apps", desc: "Front-end and back-end development delivering robust digital platforms." },
    { id: 'data-science', icon: <Database size={32} />, title: "Data Science", desc: "Predictive analytics, data processing, and enterprise dashboards." },
    { id: 'cloud-solutions', icon: <Cloud size={32} />, title: "Cloud Solutions", desc: "Deployment and maintenance of highly scalable cloud infrastructure." },
    { id: 'ai-ml', icon: <Cpu size={32} />, title: "AI & Machine Learning", desc: "Insight generation and decision support systems for complex data." },
    { id: 'custom-software', icon: <Code size={32} />, title: "Custom Software", desc: "Tailored enterprise modules to handle specialized workflows." },
    { id: 'ui-ux', icon: <Layout size={32} />, title: "UI/UX Design", desc: "Stunning user interfaces and optimized digital user experiences." },
  ];

  return (
    <section id="it-solutions" className="section" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Software & IT Solutions.</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Empowering businesses with full-stack development, artificial intelligence, and deep data analytics. Click any solution to learn more.
          </p>
        </motion.div>

        <motion.div 
          variants={containerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {services.map((svc, i) => (
            <motion.div key={i} variants={itemFade} whileHover={{ y: -10, scale: 1.02 }} style={{ display: 'flex' }}>
              <Link 
                to={`/service/${svc.id}`}
                className="glass-panel" 
                style={{ flex: 1, padding: '2.5rem', textAlign: 'left', transition: 'box-shadow 0.3s ease', textDecoration: 'none', color: 'inherit' }} 
              >
                <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{svc.icon}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#fff' }}>{svc.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{svc.desc}</p>
                
                <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: 500, fontSize: '0.9rem' }}>
                  Learn More &rarr;
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ITSolutions;
