
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Schema.org разметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Александра Журналова - Творческие дневники и коллажи",
          "url": "https://журналова.рф/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://журналова.рф/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Александра Журналова",
          "url": "https://журналова.рф/",
          "sameAs": [
            "https://instagram.com/alexandra_journals",
            "https://youtube.com/alexandrajournals",
            "https://facebook.com/alexandrajournals"
          ],
          "jobTitle": "Художник, автор дневников",
          "worksFor": {
            "@type": "Organization",
            "name": "Студия творческих дневников"
          }
        })}
      </script>
    </div>
  );
};

export default Index;
