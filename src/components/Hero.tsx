import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-24 pb-16 flex items-center"
      id="hero"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-40 right-10 w-20 h-20 bg-journal-pink rounded-full opacity-60 animate-float" aria-hidden="true" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-journal-peach rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-journal-purple rounded-full opacity-40 animate-float" style={{ animationDelay: "1s" }} aria-hidden="true" />
      
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
            itemProp="headline"
          >
            Твой дневник — <span className="text-primary italic">твоя история</span>
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 text-muted-foreground"
            itemProp="description"
          >
            Превращаю обычные дневники в произведения искусства. 
            Делюсь вдохновением и техниками создания красивых коллажей 
            в блокнотах и ежедневниках.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="font-medium"
              aria-label="Записаться на мастер-классы"
            >
              Мои мастер-классы
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-medium"
              aria-label="Узнать больше о моих курсах"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/40?img=${i+10}`}
                    alt={`Отзыв ученика ${i}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="font-medium">Более 2,000+ довольных учеников</p>
              <div 
                className="flex items-center mt-1"
                itemProp="aggregateRating"
                itemScope
                itemType="http://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="ratingCount" content="2074" />
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-amber-400" aria-hidden="true">★</span>
                ))}
                <span className="ml-1 text-sm text-muted-foreground">
                  (4.9/5)
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?auto=format&fit=crop&w=800&q=80" 
              alt="Творческий дневник с коллажами и рисунками" 
              className="w-full h-full object-cover"
              loading="eager"
              width="800"
              height="500"
              itemProp="image"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-48 rounded-lg shadow-xl overflow-hidden border-4 border-background rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1527334919515-b8dee906a34b?auto=format&fit=crop&w=300&q=80" 
              alt="Коллаж в блокноте с фотографиями и наклейками" 
              className="w-full h-full object-cover"
              loading="lazy"
              width="300"
              height="225"
            />
          </div>
          <div className="absolute -top-8 -right-8 w-48 h-64 rounded-lg shadow-xl overflow-hidden border-4 border-background -rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1618005198919-177e9dd3b230?auto=format&fit=crop&w=300&q=80" 
              alt="Материалы для творчества: наклейки, ленты, вырезки" 
              className="w-full h-full object-cover"
              loading="lazy"
              width="300"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
