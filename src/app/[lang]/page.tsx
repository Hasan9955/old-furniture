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
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: 'ar' | 'en' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <Categories dict={dict} />
        <Services dict={dict} />
        {/* <HouseShifting dict={dict} /> */}
        <Experience dict={dict} />
        <About dict={dict} />
        <ServiceAreas dict={dict} />
        <Testimonials dict={dict} />
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} />
      <FloatingContacts dict={dict} />
    </>
  );
}
