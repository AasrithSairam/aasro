import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Database, Cloud, Cpu, Code, Layout, ArrowLeft } from 'lucide-react';
import Contact from '../components/Contact';

const servicesData = {
  'web-apps': {
    title: "Web & Desktop Apps",
    icon: <Globe size={48} />,
    tagline: "Building the digital platforms of tomorrow.",
    description: "We specialize in developing robust, scalable, and secure front-end and back-end web applications, as well as native desktop solutions. Our expertise spans React, Node.js, Python, and modern web architectures designed for absolute performance.",
    features: [
      "Custom Enterprise Web Portals",
      "Progressive Web Apps (PWA)",
      "Cross-Platform Desktop Apps",
      "API Development & Integration"
    ]
  },
  'data-science': {
    title: "Data Science & Analytics",
    icon: <Database size={48} />,
    tagline: "Transforming raw data into actionable business intelligence.",
    description: "Our data science team provides end-to-end data processing, visualization, and predictive analytics. From raw data aggregation to generating critical insights, we engineer solutions that give you a competitive edge.",
    features: [
      "Exploratory Data Analysis",
      "Predictive & Prescriptive Analytics",
      "Enterprise Data Dashboards",
      "Big Data Processing Architecture"
    ]
  },
  'cloud-solutions': {
    title: "Cloud-Based Solutions",
    icon: <Cloud size={48} />,
    tagline: "Scalable infrastructure for modern enterprises.",
    description: "We help businesses seamlessly migrate to the cloud and optimize existing cloud infrastructure. Using AWS, Azure, and Google Cloud, we ensure your applications are highly available, secure, and cost-effective.",
    features: [
      "Cloud Migration Strategies",
      "Serverless Architecture",
      "Kubernetes & Docker Containerization",
      "24/7 Cloud Support & Maintenance"
    ]
  },
  'ai-ml': {
    title: "AI & Machine Learning",
    icon: <Cpu size={48} />,
    tagline: "Intelligent systems that learn and adapt.",
    description: "Leverage the power of Artificial Intelligence and Machine Learning to automate decisions, predict outcomes, and analyze complex datasets. We build custom models tailored exactly to your unique business challenges.",
    features: [
      "Custom ML Model Training",
      "Natural Language Processing (NLP)",
      "Computer Vision Systems",
      "Decision Support Systems"
    ]
  },
  'custom-software': {
    title: "Custom Software Modules",
    icon: <Code size={48} />,
    tagline: "Tailored code for specialized workflows.",
    description: "Off-the-shelf software rarely fits perfectly. We design and develop proprietary enterprise software modules that seamlessly integrate into the core of your operational flow, enhancing efficiency without disruption.",
    features: [
      "Legacy System Modernization",
      "Bespoke Internal Tools",
      "Microservices Architecture",
      "Automated Workflow Implementation"
    ]
  },
  'ui-ux': {
    title: "UI/UX Design",
    icon: <Layout size={48} />,
    tagline: "Crafting beautiful digital experiences.",
    description: "Design is not just what it looks like; it's how it works. Our UI/UX team ensures that your platforms feel effortless and premium, driving user engagement and satisfaction through intuitive layouts and micro-animations.",
    features: [
      "User Research & Wireframing",
      "High-Fidelity Prototyping",
      "Design System Creation",
      "Usability Testing & Optimization"
    ]
  }
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Service Not Found</h2>
        <Link to="/it-solutions" className="button-primary" style={{ marginTop: '2rem' }}>Return Context</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section" style={{ backgroundColor: 'var(--color-bg)', minHeight: '70vh', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3rem' }}
          >
            <Link to="/it-solutions" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
              <ArrowLeft size={18} /> Back to IT Solutions
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

            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Core Capabilities</h3>
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

export default ServiceDetailsPage;
