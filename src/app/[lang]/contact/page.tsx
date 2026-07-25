import { getDictionary } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingWhatsApp";
import Contacts from "@/components/Contact";

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'en' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: `${dict.Contact?.titlePart1 || 'Contact'} ${dict.Contact?.titlePart2 || 'Us'} | ${dict.Navbar.logoScrap}${dict.Navbar.logoDammam}`,
    description: dict.Contact?.description || 'Contact us for scrap and used items.',
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: 'ar' | 'en' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main className="min-h-screen bg-slate-50 pt-12 pb-16">
        <Contacts dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} />
      <FloatingContacts dict={dict} />
    </>
  );
}
