import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Doctors } from './components/Doctors';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import EmergencyTab from "./components/EmergencyTab";

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
      <section id="footer" className="min-h-screen scroll-mt-24">
        <Footer />
      </section>
      <EmergencyTab />
    </div>
  );
}
