import React from 'react';

export const Hero = () => (
    <div className="bg-gradient-to-b from-sky-100 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Caravan Repairs in the Illawarra</h2>
          <p className="text-xl text-gray-600 mb-8">Professional repairs, customization, and maintenance services</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Book a Repair
          </button>
        </div>
      </div>
    </div>
  );

export default Hero;