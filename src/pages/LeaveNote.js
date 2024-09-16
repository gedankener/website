import React from 'react';
import PageTemplate from '../components/PageTemplate';

const LeaveNote = ({ isChaos }) => {
  const content = (
    <>
      <h2>Leave Me a Note</h2>
      <p>This feature is coming soon! In the future, you'll be able to leave me a personal note here.</p>
      <p>In the meantime, feel free to explore the other sections of my website.</p>
      <ul>
        <li>Check out my projects</li>
        <li>Read about my research</li>
        <li>Browse my favorite books and quotes</li>
        <li>Discover my music taste</li>
      </ul>
      <p>Thank you for your interest in connecting with me!</p>
    </>
  );

  return <PageTemplate title="Leave a Note" content={content} isChaos={isChaos} />;
};

export default LeaveNote;