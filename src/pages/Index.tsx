
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { SchemaOrgWebsite, SchemaOrgPerson, SchemaBreadcrumbList } from "@/components/SEOHelpers";

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
      <SchemaOrgWebsite />
      <SchemaOrgPerson />
      <SchemaBreadcrumbList />
    </div>
  );
};

export default Index;
