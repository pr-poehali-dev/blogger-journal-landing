import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Award } from "lucide-react";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-journal-cream/30"
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4" itemProp="name">Александра Журналова</h2>
          <p className="text-xl font-caveat text-primary mb-6">Художник, автор, создатель дневников</p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl border-2 border-primary/30"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" 
                alt="Александра Журналова - автор творческих мастер-классов" 
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width="600"
                height="500"
                itemProp="image"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-journal-pink/20 rounded-full"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Привет, меня зовут Александра!</h3>
            
            <div itemProp="description">
              <p className="mb-4 text-muted-foreground">
                Я занимаюсь созданием творческих дневников уже более 7 лет. За это время я разработала
                собственные техники создания коллажей, которые делают каждый дневник уникальным и особенным.
              </p>
              
              <p className="mb-6 text-muted-foreground">
                Моя философия – каждый день достоин быть запечатленным красиво! Через мои мастер-классы 
                я помогаю людям раскрыть свой творческий потенциал и создавать произведения искусства
                из обычных моментов жизни.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <BookOpen className="text-primary mb-2" />,
                  title: "50+ курсов",
                  description: "Авторских мастер-классов для всех уровней",
                },
                {
                  icon: <Palette className="text-primary mb-2" />,
                  title: "300+ работ",
                  description: "Созданных журналов и творческих дневников",
                },
                {
                  icon: <Award className="text-primary mb-2" />,
                  title: "10+ наград",
                  description: "За вклад в развитие скрапбукинга",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white/60 rounded-lg shadow-sm">
                  {item.icon}
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <Button>Подробнее обо мне</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
