import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Books = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Bookshelf</h2>
      <ul>
        <li>Book 1: Brief review</li>
        <li>Book 2: Brief review</li>
        <li>Book 3: Brief review</li>
      </ul>
    </>
  );

  return <PageTemplate title="Books" content={content} isChaos={isChaos} />;
};

export default Books;