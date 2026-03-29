import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, Activity, Target, DollarSign, ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

const mechanicalData = {
  '2d-3d-assemblies': {
    title: "2D Drawings & 3D Assemblies",
    icon: <PenTool size={48} />,
    tagline: "Precision modeling from concept to reality.",
    description: "We provide comprehensive 2D drafting and 3D modeling services. Our team creates meticulous manufacturing drawings, complex assemblies, and exploded views ensuring every tolerance and geometric detail is perfectly defined before production begins.",
    features: [
      "Concept & Layout Development",
      "Detailed Manufacturing Fabrication Drawings",
      "3D CAD Solid & Surface Modeling",
      "Bill of Materials (BOM) Preparation"
    ]
  },
  'strength-fatigue': {
    title: "Strength & Fatigue Validation",
    icon: <Activity size={48} />,
    tagline: "Ensuring your products endure the test of time.",
    description: "Our engineering validation covers rigorous strength testing and fatigue life calculations. We simulate extreme operational environments to identify structural weaknesses before prototyping, guaranteeing product safety and longevity.",
    features: [
      "Finite Element Analysis (FEA)",
      "High & Low Cycle Fatigue Life Calculations",
      "Dynamic & Kinematic Simulations",
      "Material Selection & Optimization"
    ]
  },
  'tolerance-stress': {
    title: "Tolerance & Stress Analysis",
    icon: <Target size={48} />,
    tagline: "Mitigating risk through computational precision.",
    description: "We utilize advanced computational tools to conduct thorough stress analysis and tolerance stack-ups. Our analysis identifies critical stress concentrations and ensures proper fit, form, and function across complex mechanical assemblies.",
    features: [
      "Linear & Non-Linear Stress Analysis",
      "Geometric Dimensioning & Tolerancing (GD&T)",
      "Thermal & Fluid Dynamics Analysis",
      "Worst-Case & Statistical Tolerance Analysis"
    ]
  },
  'value-engineering': {
    title: "Value Engineering & Costing",
    icon: <DollarSign size={48} />,
    tagline: "Maximizing function while minimizing production cost.",
    description: "Our value engineering services optimize your product designs for manufacturability (DFM) and assembly (DFA). We provide accurate product costing, raw material estimations, and design streamlining to significantly reduce your time-to-market.",
    features: [
      "Design for Manufacturability & Assembly (DFMA)",
      "Component Weight Reduction",
      "Alternative Material Cost Analysis",
      "Manufacturing Process Optimization"
    ]
  }
};

const MechanicalDetailsPage = () => {
  const { id } = useParams();
  const service = mechanicalData[id];

  if (!service) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Service Not Found</h2>
        <Link to="/mechanical" className="button-primary" style={{ marginTop: '2rem' }}>Return Context</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section" style={{ backgroundColor: '#000', minHeight: '70vh', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3rem' }}
          >
            <Link to="/mechanical" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
              <ArrowLeft size={18} /> Back to Mechanical Engineering
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

            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Validation Scope</h3>
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

export default MechanicalDetailsPage;
