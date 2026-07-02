import React from 'react';
import ITSolutions from '../components/ITSolutions';
import Contact from '../components/Contact';

const ITPage = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <ITSolutions />
      <Contact module="it" />
    </div>
  );
};

export default ITPage;
