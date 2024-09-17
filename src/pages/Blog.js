import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Blog = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Blog</h2>
      <article>
        <h3>Blog Post Title 1</h3>
        <p>Brief excerpt from the blog post...</p>
      </article>
      <article>
        <h3>Blog Post Title 2</h3>
        <p>Brief excerpt from the blog post...</p>
      </article>
    </>
  );

  return <PageTemplate title="Blog" content={content} isChaos={false} />;
};

export default Blog;