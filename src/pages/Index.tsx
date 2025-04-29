import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";

interface IndexProps {
  about?: boolean;
  works?: boolean;
  gallery?: boolean;
  newsletter?: boolean;
}

const Index: React.FC<IndexProps> = ({ about, works, gallery, newsletter }) => {
  useEffect(() => {
    if (about) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (works) {
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
    } else if (gallery) {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    } else if (newsletter) {
      document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [about, works, gallery, newsletter]);

  // Устанавливаем заголовок документа без использования react-helmet-async
  useEffect(() => {
    document.title = "Журналова | Главная";
  }, []);

  return (
    <>      
      <Hero />
      
      <section id="about">
        <About />
      </section>
      
      <section id="works">
        <Works />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      
      <section id="newsletter">
        <Newsletter />
      </section>
    </>
  );
};

export default Index;
