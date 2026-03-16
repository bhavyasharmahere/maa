import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Doctors } from './components/Doctors';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="specialties" className="min-h-screen">
          <Specialties />
        </section>
        <section id="doctors" className="min-h-screen">
          <Doctors />
        </section>
        <section id="services" className="min-h-screen">
          <Services />
        </section>
        <section id="testimonials" className="min-h-screen">
          <Testimonials />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
