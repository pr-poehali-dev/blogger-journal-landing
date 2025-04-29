import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-journal-purple/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-journal-purple/30 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-journal-pink/30 rounded-full" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Подпишись на мой <span className="text-primary italic">блог</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Получай новые идеи, мастер-классы и вдохновение прямо на свою почту.
                Я делюсь советами и секретами каждую неделю!
              </p>
            </div>
            
            <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Твой email" 
                className="bg-background/80 backdrop-blur-sm border-transparent focus:border-primary h-12"
              />
              <Button size="lg" className="md:w-auto">
                Подписаться
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Никакого спама, обещаю! Только полезные материалы и вдохновение.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;