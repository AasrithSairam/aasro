import React from 'react';
import Educations from '../components/Educations';
import Contact from '../components/Contact';

const EducationPage = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Educations />
      <Contact module="education" />
    </div>
  );
};

export default EducationPage;
