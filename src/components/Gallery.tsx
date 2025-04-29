import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ImageProps = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState<ImageProps[]>([]);

  const galleryImages: ImageProps[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618005198919-177e9dd3b230?auto=format&fit=crop&w=600&q=80",
      alt: "Материалы для скрапбукинга",
      category: "materials",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=600&q=80",
      alt: "Открытый дневник с фотографиями",
      category: "journals",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?auto=format&fit=crop&w=600&q=80",
      alt: "Декорированные страницы альбома",
      category: "collages",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584552541487-6c1731eb7dee?auto=format&fit=crop&w=600&q=80",
      alt: "Творческий процесс",
      category: "process",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1627163805005-05c548e8f5da?auto=format&fit=crop&w=600&q=80",
      alt: "Страницы с коллажами",
      category: "collages",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=600&q=80",
      alt: "Дневник с декором",
      category: "journals",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?auto=format&fit=crop&w=600&q=80",
      alt: "Инструменты для скрапбукинга",
      category: "materials",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1612367289789-72cc2ddf221e?auto=format&fit=crop&w=600&q=80",
      alt: "Мастер-класс по скрапбукингу",
      category: "process",
    },
  ];

  const categories = [
    { id: "all", label: "Все работы" },
    { id: "journals", label: "Дневники" },
    { id: "collages", label: "Коллажи" },
    { id: "materials", label: "Материалы" },
    { id: "process", label: "Процесс" },
  ];

  useEffect(() => {
    if (selectedCategory === "all") {
      setVisibleImages(galleryImages);
    } else {
      setVisibleImages(
        galleryImages.filter((img) => img.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <section 
      id="gallery" 
      className="py-20 bg-journal-cream/30"
      itemScope
      itemType="http://schema.org/ImageGallery"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
            itemProp="name"
          >
            Галерея вдохновения
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" itemProp="description">
            Погрузитесь в мир творчества и вдохновения. Здесь собраны фотографии
            моих работ, процессов создания и материалов.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto p-1 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              role="list"
              aria-label="Галерея изображений"
            >
              {visibleImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer group hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedImage(image)}
                      role="listitem"
                      aria-label={image.alt}
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width="600"
                        height="600"
                        itemProp="contentUrl"
                      />
                      <meta itemProp="name" content={image.alt} />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                        loading="lazy"
                        width="1000"
                        height="1000"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                        <h3 className="text-lg font-medium">{image.alt}</h3>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
