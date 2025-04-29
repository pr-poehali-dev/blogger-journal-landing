import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="pt-24 min-h-screen flex flex-col justify-center relative hero-pattern overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Креативные дневники и коллажи
              <span className="text-primary-foreground block mt-2">для вашего вдохновения</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Превратите ваши мысли в произведения искусства с помощью моих авторских техник 
              создания уникальных блокнотов и коллажей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full text-lg px-6 py-6">
                Начать творить
              </Button>
              <Button variant="outline" className="rounded-full text-lg px-6 py-6">
                Посмотреть работы
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            {/* Декоративные элементы */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full mix-blend-multiply blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full mix-blend-multiply blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
            
            {/* Основное изображение */}
            <div className="relative diary-border bg-white p-4 md:p-6 rounded-lg rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <div className="washi-tape" style={{ "--tape-color": "#E9D8FD" } as React.CSSProperties}></div>
              <div className="washi-tape" style={{ "--tape-color": "#FBD38D", "--tape-rotate": "3deg", "--tape-top": "-15px", "--tape-left": "60%" } as React.CSSProperties}></div>
              
              <img 
                src="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Творческий дневник с коллажами и рисунками" 
                className="rounded-md w-full object-cover aspect-[4/3] shadow-sm"
              />
              
              <div className="mt-4 flex justify-between items-center">
                <p className="font-caveat text-2xl text-primary-foreground">Мой арт-журнал</p>
                <p className="text-sm text-muted-foreground">Апрель 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Узнать больше</span>
        <ArrowDown className="text-primary-foreground" />
      </div>
      
      {/* Декоративные элементы фона */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply blur-xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply blur-xl"></div>
    </section>
  );
};

export default Hero;
