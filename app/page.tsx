import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Перейти до контенту</a>

      <Preloader />
      <CustomCursor />
      <Header />

      <main id="main">
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseMe />
        <Process />
        <Testimonials />
        <About />
        <TechStack />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
