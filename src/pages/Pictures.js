import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Pictures = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Gallery</h2>
      <div className="image-gallery">
        {/* Replace with actual images */}
        <img src="/api/placeholder/300/200" alt="Placeholder 1" />
        <img src="/api/placeholder/300/200" alt="Placeholder 2" />
        <img src="/api/placeholder/300/200" alt="Placeholder 3" />
      </div>
    </>
  );

  return <PageTemplate title="Pictures" content={content} isChaos={isChaos} />;
};

export default Pictures;