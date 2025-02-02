import React, { useState, useEffect } from 'react';

const TextMouseTrail = ({ items, maxNumberOfItems, distance, textClass, fadeAnimation, children }) => {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    // Get mouse position
    const { clientX, clientY } = e;

    // Add new text position to the trail
    setTrail((prevTrail) => {
      // Ensure we only have the maximum number of items
      if (prevTrail.length >= maxNumberOfItems) {
        prevTrail.shift(); // Remove the first element
      }
      // Add new letter with position
      return [
        ...prevTrail,
        {
          letter: items[prevTrail.length % items.length],
          x: clientX,
          y: clientY,
        }
      ];
    });
  };

  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [items]);

  return (
    <div>
      {children}
      {/* Render the text trail */}
      {trail.map((trailItem, index) => (
        <span
          key={index}
          className={`${textClass} absolute pointer-events-none`}
          style={{
            top: trailItem.y + distance,
            left: trailItem.x + distance,
            transition: fadeAnimation ? 'opacity 0.5s' : 'none',
          }}
        >
          {trailItem.letter}
        </span>
      ))}
    </div>
  );
};

export default TextMouseTrail;
