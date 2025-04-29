import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-white border-t"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="container py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-playfair font-bold text-primary mb-4 inline-block">
              <span className="font-caveat">Александра</span>
              <span className="ml-2">Журналова</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Вдохновляю создавать уникальные дневники и коллажи, которые хранят ваши самые ценные воспоминания.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Подписаться на Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Перейти на канал YouTube"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Перейти на страницу Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:contact@example.com"
                aria-label="Написать на электронную почту"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {[
                { text: "Главная", href: "/" },
                { text: "Обо мне", href: "#about" },
                { text: "Мои работы", href: "#works" },
                { text: "Галерея", href: "#gallery" },
                { text: "Блог", href: "#blog" },
                { text: "Карта сайта", href: "/sitemap" },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Мастер-классы</h3>
            <ul className="space-y-2">
              {[
                { text: "Основы журналинга", href: "#" },
                { text: "Техники коллажирования", href: "#" },
                { text: "Работа с фотографиями", href: "#" },
                { text: "Художественный леттеринг", href: "#" },
                { text: "Скрапбукинг для начинающих", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <address className="not-italic">
              <div className="text-muted-foreground space-y-2">
                <p itemProp="email">
                  <span className="font-medium text-foreground">Email:</span> contact@example.com
                </p>
                <p>
                  <span className="font-medium text-foreground">Рабочие часы:</span> Пн-Пт, 10:00 - 18:00
                </p>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <span className="font-medium text-foreground">Адрес:</span>{" "}
                  <span itemProp="addressLocality">Москва</span>,{" "}
                  <span itemProp="streetAddress">ул. Творческая, 123</span>
                </p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Александра Журналова. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
