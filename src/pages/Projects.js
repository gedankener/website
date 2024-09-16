import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Projects = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Projects</h2>
      <ul>
        <li>Project 1: Brief description</li>
        <li>Project 2: Brief description</li>
        <li>Project 3: Brief description</li>
      </ul>
      <p>These are some of the projects I've been working on. Click on each for more details.</p>
    </>
  );

  return <PageTemplate title="Projects" content={content} isChaos={isChaos} />;
};

export default Projects;