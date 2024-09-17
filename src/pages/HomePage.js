import React from 'react';
import BubbleAnimation from '../components/BubbleAnimation';

const HomePage = ({ isChaos, setIsChaos }) => {
  return (
    <div className="home-page" >
      {isChaos ? (
        <BubbleAnimation isAnimating={isChaos} setIsChaos={setIsChaos} />
      ) : (
        <div className="welcome-message" style={{ marginLeft : 300}}>
          <h1>Welcome to My Website</h1>
          <p>Please use the sidebar to navigate.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;