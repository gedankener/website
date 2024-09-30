import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Quotes = ({ isChaos }) => {
  const content = (
    <>
      <h2>Favorite Quotes</h2>
      <blockquote>"He never created a finished product. Finished products are for decadent minds. His was an evolving mechanism.." - Asimov</blockquote>
      <blockquote>"You have to go over the line to see the line" - Simpkins</blockquote>
      <blockquote>"Quote 3" - Author</blockquote>
    </>
  );

  return <PageTemplate title="Quotes" content={content} isChaos={isChaos} />;
};

export default Quotes;