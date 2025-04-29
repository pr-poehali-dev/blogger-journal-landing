import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle2, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Имитация запроса
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-primary/10 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg diary-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Подписаться на блог</h2>
            <p className="text-muted-foreground">
              Получайте вдохновение, советы и новые идеи для творчества прямо на вашу почту
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 text-green-700 rounded-full mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Спасибо за подписку!</h3>
              <p className="text-muted-foreground">
                Я отправила вам письмо с подтверждением. Проверьте вашу почту и подтвердите подписку.
              </p>
              <Button 
                variant="link" 
                className="mt-4"
                onClick={() => setIsSubmitted(false)}
              >
                Подписать другой email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Ваш email адрес"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="relative"
                >
                  <span className={`transition-opacity ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    Подписаться <Send className="ml-2 h-4 w-4" />
                  </span>
                  {isLoading && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Подписываясь, вы соглашаетесь получать письма о новостях блога, новых техниках и творческих идеях. 
                Вы можете отписаться в любой момент.
              </p>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-center">Что вы получите:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-3">
                <div className="font-caveat text-xl text-primary-foreground mb-2">Еженедельные идеи</div>
                <p className="text-sm text-muted-foreground">Свежие идеи для ваших творческих проектов</p>
              </div>
              <div className="text-center p-3">
                <div className="font-caveat text-xl text-primary-foreground mb-2">Мастер-классы</div>
                <p className="text-sm text-muted-foreground">Пошаговые инструкции по созданию проектов</p>
              </div>
              <div className="text-center p-3">
                <div className="font-caveat text-xl text-primary-foreground mb-2">Вдохновение</div>
                <p className="text-sm text-muted-foreground">Красивые примеры работ для вдохновения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
