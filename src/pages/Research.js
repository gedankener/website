import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Research = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Research</h2>
      <ul>
        <li>Research Topic 1: Brief description</li>
        <li>Research Topic 2: Brief description</li>
        <li>Research Topic 3: Brief description</li>
      </ul>
      <p>Here you can find information about my ongoing and completed research projects.</p>
    </>
  );

  return <PageTemplate title="Research" content={content} isChaos={isChaos} />;
};

export default Research;