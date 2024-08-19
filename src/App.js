import React, { useState, useEffect, useCallback } from 'react';
import { Toggle } from 'lucide-react';

const pages = ['Projects', 'Quotes', 'Books', 'Music', 'Picture', 'Blog', 'CV', 'Leave Me a Note'];

const Bubble = ({ page, position, velocity }) => (
  <div 
    className="absolute rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 hover:scale-110"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '100px',
      height: '100px',
      background: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }}
  >
    {page}
  </div>
);

const BubbleAnimation = ({ isAnimating }) => {
  const [bubbles, setBubbles] = useState([]);

  const moveBubbles = useCallback(() => {
    setBubbles(prevBubbles => prevBubbles.map(bubble => ({
      ...bubble,
      position: {
        x: (bubble.position.x + bubble.velocity.x + window.innerWidth) % window.innerWidth,
        y: (bubble.position.y + bubble.velocity.y + window.innerHeight) % window.innerHeight
      }
    })));
  }, []);

  useEffect(() => {
    setBubbles(pages.map(page => ({
      page,
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
      velocity: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
    })));

    let animationFrame;
    if (isAnimating) {
      const animate = () => {
        moveBubbles();
        animationFrame = requestAnimationFrame(animate);
      };
      animate();
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isAnimating, moveBubbles]);

  return (
    <>
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </>
  );
};

const HomePage = () => {
  const [isChaos, setIsChaos] = useState(true);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-900">
      <div className="absolute top-4 right-4 flex items-center space-x-2 text-white">
        <span>Stop the chaos</span>
        <Toggle 
          className="cursor-pointer" 
          size={24} 
          onClick={() => setIsChaos(!isChaos)} 
        />
      </div>
      
      {!isChaos && (
        <div className="absolute left-0 top-0 h-full w-64 bg-gray-800 p-4">
          <nav>
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={index} className="text-white hover:text-blue-300 cursor-pointer">{page}</li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      
      <BubbleAnimation isAnimating={isChaos} />
    </div>
  );
};

export default HomePage;