import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
    alt: "Красочный дневник с стикерами"
  },
  {
    src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    alt: "Коллаж из фотографий и записей"
  },
  {
    src: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=600&q=80",
    alt: "Акварельный скетч в дневнике"
  },
  {
    src: "https://images.unsplash.com/photo-1516714819001-9ddd21351d6d?auto=format&fit=crop&w=600&q=80",
    alt: "Страница с каллиграфией"
  },
  {
    src: "https://images.unsplash.com/photo-1606312619645-f2351b7b4972?auto=format&fit=crop&w=600&q=80",
    alt: "Дневник путешествий с билетами"
  },
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    alt: "Блокнот с засушенными растениями"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-journal-pink/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Галерея <span className="text-primary italic">вдохновения</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Взгляните на мои любимые работы и найдите идеи для своего следующего проекта.
            От простых записей до сложных коллажей — возможности безграничны!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-medium">
                  Просмотр
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 border-none bg-transparent">
          <img 
            src={selectedImage || ''} 
            alt="Увеличенное изображение" 
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;