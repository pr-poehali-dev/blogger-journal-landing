import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const SiteMap = () => {
  const siteMapData = [
    {
      section: "Главная",
      url: "/",
      description: "Домашняя страница блога Александры Журналовой",
      subsections: []
    },
    {
      section: "Обо мне",
      url: "/#about",
      description: "Информация об авторе и её опыте в создании дневников и коллажей",
      subsections: []
    },
    {
      section: "Мои работы",
      url: "/#works",
      description: "Портфолио выполненных проектов и творческих работ",
      subsections: []
    },
    {
      section: "Галерея",
      url: "/#gallery",
      description: "Визуальное представление дневников и коллажей",
      subsections: []
    },
    {
      section: "Рассылка",
      url: "/#newsletter",
      description: "Подписка на новости и обновления блога",
      subsections: []
    },
    {
      section: "Мастер-классы",
      url: "#",
      description: "Обучающие материалы по созданию дневников и коллажей",
      subsections: [
        { name: "Основы журналинга", url: "#" },
        { name: "Техники коллажирования", url: "#" },
        { name: "Работа с фотографиями", url: "#" },
        { name: "Художественный леттеринг", url: "#" },
        { name: "Скрапбукинг для начинающих", url: "#" }
      ]
    }
  ];

  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-playfair font-bold mb-2">Карта сайта</h1>
      <p className="text-muted-foreground mb-8">
        Полный список всех разделов и страниц блога Александры Журналовой о создании дневников и коллажей
      </p>
      
      <Separator className="mb-8" />
      
      <div className="space-y-10">
        {siteMapData.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-start">
              <ArrowRight className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-medium">
                  <Link to={item.url} className="hover:text-primary transition-colors">
                    {item.section}
                  </Link>
                </h2>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
            
            {item.subsections.length > 0 && (
              <div className="ml-12 pl-4 border-l-2 border-primary/20">
                {item.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-3">
                    <Link 
                      to={subsection.url}
                      className="group flex items-center hover:text-primary transition-colors"
                    >
                      <span className="inline-block w-2 h-2 bg-primary/70 rounded-full mr-3 group-hover:bg-primary"></span>
                      {subsection.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t">
        <p className="text-sm text-muted-foreground">
          Технический файл карты сайта для поисковых систем доступен по адресу:{" "}
          <a 
            href="/sitemap.xml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            sitemap.xml
          </a>
        </p>
      </div>
    </div>
  );
};

export default SiteMap;
