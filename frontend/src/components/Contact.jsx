import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ module }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '', 
    module: module || 'general' 
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          module: module || formData.module
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', module: module || 'general' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Get in Touch.</h2>
          <p>Let's discuss how AASRO Solutions can accelerate your progress.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel" 
          style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem' }}
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem' }}
            />
          </div>

          {!module && (
            <div>
              <select
                value={formData.module}
                onChange={e => setFormData({...formData, module: e.target.value})}
                required
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '0.5rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: '#fff', 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  outline: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2rem'
                }}
              >
                <option value="general" style={{ background: '#111', color: '#fff' }}>Select Topic / Department</option>
                <option value="it" style={{ background: '#111', color: '#fff' }}>IT Solutions</option>
                <option value="mechanical" style={{ background: '#111', color: '#fff' }}>Mechanical Solutions</option>
                <option value="education" style={{ background: '#111', color: '#fff' }}>Educations</option>
              </select>
            </div>
          )}

          <div>
            <textarea 
              placeholder="Message" 
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              required
              rows={5}
              style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', resize: 'vertical' }}
            />
          </div>
          <button type="submit" className="button-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && <p style={{ color: '#34c759', textAlign: 'center', marginTop: '1rem' }}>Message sent successfully!</p>}
          {status === 'error' && <p style={{ color: '#ff3b30', textAlign: 'center', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
