import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import BackgroundDecor from "@/components/BackgroundDecor";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import TechStack from "@/components/TechStack";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* One continuous decorative layer behind the whole page — see components/BackgroundDecor.tsx */}
      <BackgroundDecor />

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
        <AboutUs />
        <TechStack />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
