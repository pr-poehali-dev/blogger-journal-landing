import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Works = () => {
  // Примеры работ для отображения
  const works = [
    {
      id: 1,
      title: "Весенний дневник",
      description: "Креативный дневник с элементами ботаники и акварельными зарисовками",
      imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      date: "Март 2025",
      rotate: "-2deg"
    },
    {
      id: 2,
      title: "Путешествие мечты",
      description: "Арт-журнал о путешествиях с коллажами и памятными вещицами",
      imageUrl: "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      date: "Февраль 2025",
      rotate: "1deg"
    },
    {
      id: 3,
      title: "Творческие моменты",
      description: "Блокнот идей с техниками смешанных медиа и вдохновляющими цитатами",
      imageUrl: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      date: "Январь 2025",
      rotate: "2deg"
    }
  ];

  return (
    <section id="works" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои последние работы</h2>
            <p className="text-muted-foreground max-w-2xl">
              Познакомьтесь с моими недавними проектами, вдохновляйтесь и создавайте свои уникальные дневники
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="group">
              Все работы 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group relative">
              <div 
                className="polaroid bg-white p-4 transition-all duration-300"
                style={{ 
                  "--rotate": work.rotate 
                } as React.CSSProperties}
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-playfair">{work.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{work.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-caveat text-lg text-primary-foreground">{work.date}</span>
                  <Button variant="link" className="p-0 h-auto text-primary-foreground group-hover:underline">
                    Подробнее
                  </Button>
                </div>
              </div>
              
              {/* Washi tape decoration */}
              <div 
                className="washi-tape"
                style={{ 
                  "--tape-color": work.id % 3 === 0 ? "#9AE6B4" : work.id % 3 === 1 ? "#FBD38D" : "#BEE3F8",
                  "--tape-rotate": `${work.id % 2 === 0 ? -3 : 3}deg`,
                  "--tape-top": "-12px",
                  "--tape-left": `${30 + (work.id * 10)}%`,
                  "--tape-width": "100px"
                } as React.CSSProperties}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="group">
            Все работы 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;
