import React from 'react';
import BubbleAnimation from './BubbleAnimation';

const PageTemplate = ({ title, content, isChaos }) => {
  return (
    <div className="page-container">
      {isChaos ? (
        <BubbleAnimation isAnimating={true} />
      ) : (
        <div className="page-content">
          <h1>{title}</h1>
          {content}
        </div>
      )}
    </div>
  );
};

export default PageTemplate;