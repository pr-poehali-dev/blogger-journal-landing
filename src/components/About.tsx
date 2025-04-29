import { Pencil, Heart, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-journal-purple/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Привет, я <span className="text-primary italic">Алина</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Уже более 5 лет я веду творческие дневники и создаю уникальные коллажи в блокнотах.
            Мой блог и мастер-классы помогли тысячам людей преобразить свои ежедневники и найти
            в этом источник вдохновения и самовыражения.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-journal-peach/30 border-none overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Pencil className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Творческий подход</h3>
              <p className="text-muted-foreground">
                Я верю, что каждый дневник должен быть уникальным отражением своего владельца. 
                В моих мастер-классах вы найдёте десятки техник оформления страниц.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-journal-softYellow/30 border-none overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">С любовью к деталям</h3>
              <p className="text-muted-foreground">
                Маленькие детали создают большое впечатление. Я уделяю внимание каждому элементу 
                в дневнике, от выбора материалов до расположения элементов на странице.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-journal-softGreen/30 border-none overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bookmark className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Практичный подход</h3>
              <p className="text-muted-foreground">
                Мои дневники не только красивы, но и функциональны. Я покажу, как создать систему, 
                которая будет помогать вам отслеживать цели, планировать дни и фиксировать воспоминания.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;