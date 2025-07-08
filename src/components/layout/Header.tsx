import { useState, useEffect } from 'react';
import { navLinks } from '../../data';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-glass-bg backdrop-blur-md py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">צביקה אבנרי</a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">תפריט</span>
            <div className={`w-6 h-6 flex flex-col justify-around ${isMenuOpen ? 'open' : ''}`}>
              <span className="h-0.5 w-full bg-current transform transition-all" />
              <span className="h-0.5 w-full bg-current transform transition-all" />
              <span className="h-0.5 w-full bg-current transform transition-all" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className="text-lg hover:text-primary-color transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={`
            md:hidden fixed inset-0 bg-glass-bg backdrop-blur-lg
            transition-transform duration-300 transform
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-xl hover:text-primary-color transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}; 