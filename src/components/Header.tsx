import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-playfair">
            Александра
            <span className="text-primary-foreground"> Журналова</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary-foreground transition-colors">
            Обо мне
          </a>
          <a href="#works" className="text-foreground hover:text-primary-foreground transition-colors">
            Мои работы
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary-foreground transition-colors">
            Галерея
          </a>
          <a href="#newsletter" className="text-foreground hover:text-primary-foreground transition-colors">
            Подписка
          </a>
          <Button className="rounded-full">
            Связаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 text-foreground hover:text-primary-foreground transition-colors"
              onClick={closeMenu}
            >
              Обо мне
            </a>
            <a 
              href="#works" 
              className="py-2 text-foreground hover:text-primary-foreground transition-colors"
              onClick={closeMenu}
            >
              Мои работы
            </a>
            <a 
              href="#gallery" 
              className="py-2 text-foreground hover:text-primary-foreground transition-colors"
              onClick={closeMenu}
            >
              Галерея
            </a>
            <a 
              href="#newsletter" 
              className="py-2 text-foreground hover:text-primary-foreground transition-colors"
              onClick={closeMenu}
            >
              Подписка
            </a>
            <Button className="rounded-full w-full">
              Связаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
