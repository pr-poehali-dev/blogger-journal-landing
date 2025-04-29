import { Instagram, Youtube, TikTok, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="text-2xl font-bold font-playfair italic mb-4 inline-block">
              <span className="text-primary">Дневник</span>Мечты
            </a>
            <p className="text-muted-foreground">
              Твой проводник в мир творческих дневников, 
              коллажей и самовыражения через блокноты.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Разделы</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a></li>
              <li><a href="#works" className="text-muted-foreground hover:text-primary transition-colors">Мои работы</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Галерея</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> 
                <a href="mailto:hello@journal-dream.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@journal-dream.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <TikTok className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Подписка</h3>
            <p className="text-muted-foreground mb-4">
              Подпишись на мою рассылку, чтобы получать 
              свежие идеи для творчества.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Твой email" 
                className="px-4 py-2 rounded-md border border-border bg-background"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ДневникМечты. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;