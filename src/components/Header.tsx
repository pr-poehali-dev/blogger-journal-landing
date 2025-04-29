import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className="container py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-playfair font-bold text-primary flex items-center"
          aria-label="Александра Журналова - Главная страница"
        >
          <span className="font-caveat">Александра</span>
          <span className="ml-2">Журналова</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" itemScope itemType="http://schema.org/SiteNavigationElement">
          <ul className="flex items-center space-x-8">
            {[
              { title: "Главная", href: "/" },
              { title: "Обо мне", href: "#about" },
              { title: "Мои работы", href: "#works" },
              { title: "Галерея", href: "#gallery" },
              { title: "Блог", href: "#blog" },
            ].map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="font-medium hover:text-primary transition-colors"
                  itemProp="url"
                >
                  <span itemProp="name">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button>Связаться со мной</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav 
          className="md:hidden bg-white border-t py-4 animate-fade-in"
          itemScope 
          itemType="http://schema.org/SiteNavigationElement"
        >
          <ul className="container space-y-4">
            {[
              { title: "Главная", href: "/" },
              { title: "Обо мне", href: "#about" },
              { title: "Мои работы", href: "#works" },
              { title: "Галерея", href: "#gallery" },
              { title: "Блог", href: "#blog" },
            ].map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="block py-2 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                  itemProp="url"
                >
                  <span itemProp="name">{item.title}</span>
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full">Связаться со мной</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
