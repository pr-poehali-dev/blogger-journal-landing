import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const works = [
  {
    title: "Коллаж мечты",
    description: "Техника создания многослойных коллажей с использованием разных материалов",
    image: "https://images.unsplash.com/photo-1540122995631-7d74253ddf63?auto=format&fit=crop&w=500&q=80",
    category: "Мастер-класс",
    date: "12 апреля 2025"
  },
  {
    title: "Акварельный дневник",
    description: "Использование акварельных техник для оформления страниц ежедневника",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
    category: "Видеоурок",
    date: "5 марта 2025"
  },
  {
    title: "Трекеры привычек",
    description: "Красивые способы отслеживания привычек и достижений в дневнике",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=500&q=80",
    category: "Шаблоны",
    date: "20 февраля 2025"
  }
];

const Works = () => {
  return (
    <section id="works" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Мои последние <span className="text-primary italic">работы</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Изучите мои последние проекты, мастер-классы и шаблоны для создания 
              уникальных дневников и коллажей.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center mt-4 md:mt-0">
            Все работы <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all border-none">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {work.category}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{work.date}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{work.title}</h3>
                <p className="text-muted-foreground">{work.description}</p>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-normal text-primary hover:text-primary/80 hover:bg-transparent">
                  Подробнее <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="md:hidden">
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;