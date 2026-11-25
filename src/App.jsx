import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="w-full bg-brand-paper font-body text-[17px] leading-[1.65] text-brand-ink">
      <Hero />
      <About />
      <Highlights />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}
