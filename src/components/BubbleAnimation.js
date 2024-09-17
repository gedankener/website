import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BubbleAnimation = ({ isAnimating }) => {
  const [bubbles, setBubbles] = useState([]);
  const navigate = useNavigate();
  const pages = [
    { name: 'Projects', path: '/projects' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Books', path: '/books' },
    { name: 'Music', path: '/music' },
    { name: 'Pictures', path: '/pictures' },
    { name: 'Blog', path: '/blog' },
    { name: 'CV', path: '/cv' },
    { name: 'Leave Me a Note', path: '/leave-me-a-note' }
  ];
  const bubbleColors = pages.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`);

  const checkCollision = (b1, b2) => {
    const dx = b1.position.x - b2.position.x;
    const dy = b1.position.y - b2.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 100; // Assuming bubble diameter is 100px
  };

  const resolveCollision = (b1, b2) => {
    const vCollision = { x: b2.position.x - b1.position.x, y: b2.position.y - b1.position.y };
    const distance = Math.sqrt((b2.position.x - b1.position.x) * (b2.position.x - b1.position.x) + 
                               (b2.position.y - b1.position.y) * (b2.position.y - b1.position.y));
    const vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
    const vRelativeVelocity = { x: b1.velocity.x - b2.velocity.x, y: b1.velocity.y - b2.velocity.y };
    const speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
    if (speed < 0) return;
    const impulse = 2 * speed / 2; // Assuming equal mass for all bubbles
    b1.velocity.x -= impulse * vCollisionNorm.x;
    b1.velocity.y -= impulse * vCollisionNorm.y;
    b2.velocity.x += impulse * vCollisionNorm.x;
    b2.velocity.y += impulse * vCollisionNorm.y;
  };

  const moveBubbles = useCallback(() => {
    setBubbles(prevBubbles => {
      const newBubbles = prevBubbles.map(bubble => {
        let newX = bubble.position.x + bubble.velocity.x;
        let newY = bubble.position.y + bubble.velocity.y;

        // Bounce off walls
        if (newX < 0 || newX > window.innerWidth - 100) bubble.velocity.x *= -1;
        if (newY < 0 || newY > window.innerHeight - 100) bubble.velocity.y *= -1;

        return {
          ...bubble,
          position: {
            x: Math.max(0, Math.min(newX, window.innerWidth - 100)),
            y: Math.max(0, Math.min(newY, window.innerHeight - 100))
          }
        };
      });

      // Check and resolve collisions
      for (let i = 0; i < newBubbles.length; i++) {
        for (let j = i + 1; j < newBubbles.length; j++) {
          if (checkCollision(newBubbles[i], newBubbles[j])) {
            resolveCollision(newBubbles[i], newBubbles[j]);
          }
        }
      }

      return newBubbles;
    });
  }, []);

  useEffect(() => {
    setBubbles(pages.map((page, index) => ({
      page: page.name,
      path: page.path,
      position: { 
        x: Math.random() * (window.innerWidth - 100), 
        y: Math.random() * (window.innerHeight - 100) 
      },
      velocity: { 
        x: (Math.random() - 0.5) * 4, 
        y: (Math.random() - 0.5) * 4 
      },
      color: bubbleColors[index],
      isVisible: isAnimating
    })));

    let animationFrame;
    if (isAnimating) {
      const animate = () => {
        moveBubbles();
        animationFrame = requestAnimationFrame(animate);
      };
      animate();
    } else {
      setBubbles(prevBubbles => prevBubbles.map(bubble => ({ ...bubble, isVisible: false })));
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isAnimating, moveBubbles]);

  const handleBubbleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {bubbles.map((bubble, index) => (
        <div 
          key={index}
          className={`bubble ${bubble.isVisible ? 'visible' : ''}`}
          style={{
            left: `${bubble.position.x}px`,
            top: `${bubble.position.y}px`,
            backgroundColor: bubble.color,
            cursor: 'pointer',
          }}
          onClick={() => handleBubbleClick(bubble.path)}
        >
          {bubble.page}
        </div>
      ))}
    </>
  );
};

export default BubbleAnimation;