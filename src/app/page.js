import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
