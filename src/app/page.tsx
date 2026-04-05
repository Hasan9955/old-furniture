import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import HouseShifting from "@/components/HouseShifting";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HouseShifting />
        <Services />
        <Experience />
        <About />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingContacts />
    </>
  );
}
