import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Quotes = ({ isChaos }) => {
  const content = (
    <>
      <h2>Favorite Quotes</h2>
      <blockquote>"Quote 1" - Author</blockquote>
      <blockquote>"Quote 2" - Author</blockquote>
      <blockquote>"Quote 3" - Author</blockquote>
    </>
  );

  return <PageTemplate title="Quotes" content={content} isChaos={isChaos} />;
};

export default Quotes;