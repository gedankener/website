import React from 'react';
import BubbleAnimation from '../components/BubbleAnimation';

const HomePage = ({ isChaos }) => {
  return (
    <div className="home-page">
      {isChaos ? (
        <BubbleAnimation isAnimating={true} />
      ) : (
        <div className="home-content">
          <h1>Welcome to Gedankener</h1>
          <p>Explore my thoughts, projects, and interests through this interactive website.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;