import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Works = () => {
  const works = [
    {
      id: 1,
      title: "Летний дневник путешествий",
      description: "Яркий дневник с техниками коллажирования из собранных во время путешествия материалов.",
      image: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?auto=format&fit=crop&w=600&q=80",
      category: "Дневник путешествий",
      date: "15 апреля 2025",
    },
    {
      id: 2,
      title: "Ботанический скетчбук",
      description: "Сочетание акварельных зарисовок растений с техниками скрапбукинга и декоративными элементами.",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=600&q=80",
      category: "Скетчбук",
      date: "2 марта 2025",
    },
    {
      id: 3,
      title: "Семейный альбом воспоминаний",
      description: "Техники создания многослойных коллажей с использованием семейных фотографий и памятных вещей.",
      image: "https://images.unsplash.com/photo-1599442149601-9594011bac87?auto=format&fit=crop&w=600&q=80",
      category: "Фотоальбом",
      date: "10 февраля 2025",
    },
  ];

  return (
    <section 
      id="works" 
      className="py-20"
      itemScope
      itemType="http://schema.org/CollectionPage"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
            itemProp="name"
          >
            Мои последние работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вдохновляйтесь моими недавними проектами и творческими экспериментами в создании уникальных дневников и альбомов
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <Card 
              key={work.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow group"
              itemScope
              itemType="http://schema.org/CreativeWork"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="400"
                  itemProp="image"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full" itemProp="genre">
                    {work.category}
                  </span>
                  <time dateTime={work.date.replace(/\s/g, "-")} className="text-xs text-muted-foreground" itemProp="dateCreated">
                    {work.date}
                  </time>
                </div>
                <CardTitle itemProp="name">{work.title}</CardTitle>
                <CardDescription itemProp="description">{work.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto font-medium" aria-label={`Подробнее о работе ${work.title}`}>
                  Смотреть подробнее <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" aria-label="Посмотреть все мои работы и проекты">
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;
