import BrandSlide from "@/components/BrandSlide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductMotive from "@/components/ProductMotive";
import SectionPage from "@/section/page";
import React from "react";

const PageLayout = () => {
  return (
    <div>
      <main
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assests/background-gradient.png')`,
        }}
      >
        <Header />
        <Hero />
      </main>
      <section className="bg-background">
        <BrandSlide />
        <ProductMotive />
      </section>
      <SectionPage />
      <BrandSlide />
      <footer className="mt-[2rem]">
        <CTA />
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
