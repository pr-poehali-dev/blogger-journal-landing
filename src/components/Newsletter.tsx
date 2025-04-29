import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      // В реальном приложении здесь был бы API-запрос
      setSubmitted(true);
    }
  };

  return (
    <section 
      id="newsletter" 
      className="py-20 relative overflow-hidden"
      itemScope
      itemType="http://schema.org/NewsArticle"
    >
      {/* Декоративные элементы */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-journal-purple/10 rounded-full" aria-hidden="true"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-journal-pink/10 rounded-full" aria-hidden="true"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-muted">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl font-bold font-playfair mb-4"
              itemProp="headline"
            >
              Подпишись на мой блог
            </h2>
            <p 
              className="text-muted-foreground"
              itemProp="description"
            >
              Получай вдохновение, советы по созданию коллажей и информацию о новых мастер-классах прямо на свою почту
            </p>
          </div>
          
          {submitted ? (
            <div className="text-center py-4 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Спасибо за подписку!</h3>
              <p className="text-muted-foreground">
                Я отправила тебе письмо с подтверждением и небольшим подарком.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
              itemProp="potentialAction"
              itemScope
              itemType="http://schema.org/SubscribeAction"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введи свой email"
                    className="h-12"
                    required
                    aria-required="true"
                    autoComplete="email"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  aria-label="Подписаться на рассылку"
                >
                  Подписаться
                </Button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Подписываясь, ты соглашаешься получать рассылку. Ты можешь отписаться в любой момент.
                Я ценю твою приватность и никогда не передам твои данные третьим лицам.
              </p>
            </form>
          )}
          
          <div className="mt-8 pt-8 border-t border-muted">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: "12+", label: "лет опыта" },
                { number: "50+", label: "мастер-классов" },
                { number: "5000+", label: "подписчиков" },
                { number: "100+", label: "статей в блоге" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
