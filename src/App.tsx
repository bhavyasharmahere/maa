import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Doctors } from './components/Doctors';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function App() {
  return (
    <div className="min-h-screen scroll-mt-24 bg-white">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen scroll-mt-24">
          <Hero />
        </section>
        <section id="about" className="min-h-screen scroll-mt-24">
          <About />
        </section>
        <section id="specialties" className="min-h-screen scroll-mt-24 scroll-mt-24">
          <Specialties />
        </section>
        <section id="doctors" className="min-h-screen scroll-mt-24">
          <Doctors />
        </section>
        <section id="services" className="min-h-screen scroll-mt-24">
          <Services />
        </section>
        <section id="testimonials" className="min-h-screen scroll-mt-24">
          <Testimonials />
        </section>
        <section id="contact" className="min-h-screen scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
       <motion.a
        href="tel:+916114356769"
       whileHover={{ scale: 1.08 }}
       whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 animate-pulse md:hidden"
        >
        <Phone className="w-5 h-5" />
        Emergency Call
        </motion.a>
    </div>
  );
}
