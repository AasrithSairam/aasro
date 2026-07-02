import React from 'react';
import MechanicalSolutions from '../components/MechanicalSolutions';
import Contact from '../components/Contact';

const MechanicalPage = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <MechanicalSolutions />
      <Contact module="mechanical" />
    </div>
  );
};

export default MechanicalPage;
