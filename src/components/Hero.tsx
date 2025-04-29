import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Декоративные элементы */}
      <div className="absolute top-40 right-10 w-20 h-20 bg-journal-pink rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-journal-peach rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-journal-purple rounded-full opacity-40 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Твой дневник — <span className="text-primary italic">твоя история</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Превращаю обычные дневники в произведения искусства. 
            Делюсь вдохновением и техниками создания красивых коллажей 
            в блокнотах и ежедневниках.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-medium">
              Мои мастер-классы
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/40?img=${i+10}`}
                    alt="Довольный клиент"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="font-medium">Более 2,000+ довольных учеников</p>
              <div className="flex items-center mt-1">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
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
              alt="Творческий дневник" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-48 rounded-lg shadow-xl overflow-hidden border-4 border-background rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1527334919515-b8dee906a34b?auto=format&fit=crop&w=300&q=80" 
              alt="Коллаж в блокноте" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -right-8 w-48 h-64 rounded-lg shadow-xl overflow-hidden border-4 border-background -rotate-6">
            <img 
              src="https://images.unsplash.com/photo-1618005198919-177e9dd3b230?auto=format&fit=crop&w=300&q=80" 
              alt="Материалы для творчества" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;