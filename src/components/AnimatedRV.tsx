import React, { useState, useEffect } from 'react';

interface AnimatedRVProps {
  isAnimating: boolean;
}

export const AnimatedRV: React.FC<AnimatedRVProps> = ({ isAnimating }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    if (!isAnimating) {
      setScrollProgress(0);
      return;
    }
    
    const timer = setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) {
        console.error('Contact section not found');
        return;
      }

      const startPosition = window.pageYOffset;
      const endPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const distance = endPosition - startPosition;
      let startTime: any = null;
      const duration = 3750; // Increased to 4 seconds

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setScrollProgress(progress);
        
        // Smoothly scroll the window
        window.scrollTo({
          top: startPosition + (distance * progress),
          behavior: 'auto' // Using auto because we're controlling the scroll manually
        });
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }, 100);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  const calculateZigZagPosition = (progress: number) => {
    const zigZagCount = 4;
    const segmentProgress = (progress * zigZagCount) % 1;
    const segmentIndex = Math.floor(progress * zigZagCount);
    const yProgress = (progress * 100);
    
    let xPosition;
    if (segmentIndex % 2 === 0) {
      xPosition = 80 - (segmentProgress * 60);
    } else {
      xPosition = 20 + (segmentProgress * 60);
    }

    return { x: xPosition, y: yProgress };
  };

  const position = calculateZigZagPosition(scrollProgress);
  const segmentIndex = Math.floor(scrollProgress * 4);
  const rotation = segmentIndex % 2 === 0 ? 180 : 0;

  return (
    <div 
      className={`fixed z-50 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transform: `translate(${position.x}vw, ${position.y}vh) scaleX(${rotation === 180 ? -1 : 1})`,
        transition: 'transform 0.2s ease-out', // Smoother transition between positions
      }}
    >
      <svg width="120" height="60" viewBox="0 0 120 60">
        {/* RV Body */}
        <rect x="20" y="10" width="80" height="35" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
        {/* Windshield */}
        <path d="M20 30 L10 30 L10 15 L20 10" fill="#87CEEB" stroke="#000000" strokeWidth="2"/>
        {/* Wheels with rotation animation */}
        <circle cx="25" cy="45" r="8" fill="#333333" stroke="#000000" strokeWidth="2">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 25 45"
            to="360 25 45"
            dur="0.8s" // Slowed down wheel rotation
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="85" cy="45" r="8" fill="#333333" stroke="#000000" strokeWidth="2">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 85 45"
            to="360 85 45"
            dur="0.8s" // Slowed down wheel rotation
            repeatCount="indefinite"
          />
        </circle>
        {/* Windows */}
        <rect x="35" y="15" width="15" height="10" fill="#87CEEB" stroke="#000000" strokeWidth="2"/>
        <rect x="60" y="15" width="15" height="10" fill="#87CEEB" stroke="#000000" strokeWidth="2"/>
        {/* Door */}
        <rect x="85" y="20" width="10" height="20" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
        {/* Awning */}
        <rect x="30" y="8" width="60" height="2" fill="#CCCCCC"/>
      </svg>
    </div>
  );
};

export default AnimatedRV;