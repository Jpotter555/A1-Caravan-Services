import { useState } from 'react';
import { Menu } from 'lucide-react';
import logo from '../images/services/site-logo.webp';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };
  
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">A1 Custom Caravan Repairs</h1>
          </div>
          <div className="flex-shrink-0">
            <img src={logo} height="50px" width="50px"  alt='caravan logo'/>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-sky-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-sky-300 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-sky-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-sky-300 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-sky-300 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-sky-300 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;