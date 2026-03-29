import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

const educationData = {
  'high-school': {
    title: "+1 & +2 Students",
    icon: <BookOpen size={48} />,
    tagline: "Solidifying the foundation for future scholars.",
    description: "Specialized coaching in Mathematics and Physics, providing a solid foundation for competitive exams and higher studies. We focus on deep conceptual clarity over rote memorization, empowering students to tackle complex numericals with confidence.",
    features: [
      "Advanced Mathematics conceptually decoded",
      "Physics theory, practicals, and numerical problem solving",
      "Mock exams and competitive exam preparation frameworks",
      "Personalized tracking and diagnostic assessments"
    ]
  },
  'engineering': {
    title: "Engineering Students",
    icon: <GraduationCap size={48} />,
    tagline: "Bridging theory with applied engineering excellence.",
    description: "Advanced coaching in Engineering Mathematics and connected core subjects to support sustained academic excellence. We assist university students in grasping complex engineering abstracts required for high-stakes projects and exams.",
    features: [
      "Engineering Mathematics (All Semesters)",
      "Applied Mechanics, Strength of Materials, Thermodynamics",
      "Software & IT logic foundations for non-CS branches",
      "Final year project guidance and technical presentation skills"
    ]
  }
};

const EducationDetailsPage = () => {
  const { id } = useParams();
  const service = educationData[id];

  if (!service) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Program Not Found</h2>
        <Link to="/education" className="button-primary" style={{ marginTop: '2rem' }}>Return Context</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', minHeight: '70vh', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3rem' }}
          >
            <Link to="/education" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
              <ArrowLeft size={18} /> Back to Educations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ color: 'var(--color-accent)', marginBottom: '2rem' }}>
              {service.icon}
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
              {service.title}.
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '3rem', fontWeight: 300 }}>
              {service.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel"
            style={{ padding: '3rem', borderLeft: '4px solid var(--color-accent)' }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem', color: '#fff' }}>
              {service.description}
            </p>

            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Syllabus & Focus</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.features.map((feat, i) => (
                <li key={i} style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)' }}>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default EducationDetailsPage;
