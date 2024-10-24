export const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center space-y-4">
        <p>© 2024 A1 Custom Caravan Repairs. Est. 1981</p>
        <div className="pt-4 border-t border-gray-800 mt-4">
          <p className="text-gray-400 text-sm">
            Created by{' '}
            <a 
              href="https://www.linkedin.com/in/jonathan-potter-ba76611b9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-300 hover:text-sky-400 transition-colors"
            >
              Jonathan Potter
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;