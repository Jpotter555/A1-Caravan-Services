import React from 'react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-sky-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Caravan Repairs Since 1981</h2>
          <p className="text-xl text-gray-600 mb-8">Professional repairs, customization, and maintenance services</p>
          <button 
            onClick={scrollToContact}
            className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Book a Repair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;