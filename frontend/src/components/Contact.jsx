import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
