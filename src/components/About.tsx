import { BookOpen, PenTool, Palette, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary-foreground" />,
      title: "Уникальные дневники",
      description: "Создаю индивидуальные арт-дневники с использованием различных творческих техник"
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary-foreground" />,
      title: "Авторские коллажи",
      description: "Разрабатываю коллажи с неповторимым дизайном и глубоким смыслом"
    },
    {
      icon: <Palette className="h-10 w-10 text-primary-foreground" />,
      title: "Мастер-классы",
      description: "Делюсь техниками и секретами создания творческих работ"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-foreground" />,
      title: "Сообщество",
      description: "Создала дружелюбное комьюнити для обмена идеями и взаимного вдохновения"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dot-pattern relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Добро пожаловать в мой мир креативных дневников и художественных коллажей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-1 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Александра Журналова
            </h3>
            <h4 className="text-xl text-primary-foreground font-caveat mb-4">
              Художник, скрапбукер, автор блога
            </h4>
            <p className="mb-4 text-muted-foreground">
              Уже более 7 лет я занимаюсь созданием уникальных дневников, блокнотов и коллажей. 
              Моя страсть к бумажному творчеству началась еще в детстве и переросла в профессию.
            </p>
            <p className="mb-4 text-muted-foreground">
              В своих работах я сочетаю различные техники: скрапбукинг, коллажирование, 
              леттеринг, mixed media. Каждый дневник или коллаж, который я создаю — 
              это не просто красивый предмет, а настоящая история.
            </p>
            <p className="text-muted-foreground">
              Я верю, что творчество помогает выразить то, что сложно передать словами, 
              и стремлюсь поделиться этой радостью со всеми.
            </p>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="washi-tape" style={{ "--tape-color": "#FBD38D", "--tape-rotate": "-3deg", "--tape-top": "-20px", "--tape-left": "20%" } as React.CSSProperties}></div>
              <div className="washi-tape" style={{ "--tape-color": "#BEE3F8", "--tape-rotate": "5deg", "--tape-top": "-15px", "--tape-left": "60%" } as React.CSSProperties}></div>
              
              <img 
                src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d33d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" 
                alt="Александра Журналова за работой" 
                className="w-full h-auto rounded-lg shadow-lg diary-border"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-5 p-3 rounded-full bg-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
