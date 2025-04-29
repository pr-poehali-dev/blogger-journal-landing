import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-background/95 backdrop-blur-sm shadow-sm" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-playfair italic">
          <span className="text-primary">Дневник</span>Мечты
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
          <a href="#works" className="hover:text-primary transition-colors">Мои работы</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
          <Button>Связаться</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <nav className="container flex flex-col space-y-4">
            <a 
              href="#about" 
              className="px-4 py-2 hover:bg-accent/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Обо мне
            </a>
            <a 
              href="#works" 
              className="px-4 py-2 hover:bg-accent/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Мои работы
            </a>
            <a 
              href="#gallery" 
              className="px-4 py-2 hover:bg-accent/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#blog" 
              className="px-4 py-2 hover:bg-accent/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Блог
            </a>
            <Button className="mx-4">Связаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;