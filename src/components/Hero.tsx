import { useState } from 'react';
import AnimatedRV from './AnimatedRV';

export const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) {
      console.error('Contact section not found');
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 4500); // Slightly longer than animation to ensure completion
  };

  const createZigZagPath = () => {
    const segments = 4;
    let pathD = `M ${80}vw 0`;
    
    for (let i = 0; i < segments; i++) {
      const y = ((i + 1) * (100 / segments));
      if (i % 2 === 0) {
        pathD += ` L ${20}vw ${y}vh`;
      } else {
        pathD += ` L ${80}vw ${y}vh`;
      }
    }
    
    return pathD;
  };

  return (
    <section 
      className="bg-gradient-to-b from-sky-100 to-white py-20 relative"
      aria-label="Welcome section"
    >
    {/* <div className="bg-gradient-to-b from-sky-100 to-white py-20 relative"> */}
      {isAnimating && (
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-40" style={{ opacity: 0.2 }}>
          <path
            d={createZigZagPath()}
            stroke="#666"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
      )}
      <AnimatedRV isAnimating={isAnimating} />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Caravan Repairs in the Illawarra</h2>
          <p className="text-xl text-gray-600 mb-8">Professional repairs, customization, and maintenance services</p>
          <button 
            onClick={scrollToContact}
            className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors"
            aria-label='Book a repair service'
          >
            Book a Repair
          </button>
        </div>
      </div>
    {/* </div> */}
    </section>
  )
};

export default Hero;