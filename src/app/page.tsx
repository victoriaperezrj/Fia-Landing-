import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandingPixelEvents from "@/components/LandingPixelEvents";
import Features from "@/components/Features";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Professors from "@/components/Professors";
import Payment from "@/components/Payment";
import FAQ from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Courses />
        <Professors />
        <FAQ />
        <Payment />
      </main>
      <Footer />
      <WhatsAppFloat />
      <LandingPixelEvents />
    </>
  );
}
