import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SocialProof from "@/components/SocialProof";
import BeforeAfter from "@/components/BeforeAfter";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <SocialProof />
        <BeforeAfter />
        <HowWeWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
