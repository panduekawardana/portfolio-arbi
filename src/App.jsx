import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      root.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      root.querySelectorAll('[data-reveal-card]').forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 36,
          duration: 0.7,
          ease: 'power3.out',
          delay: (index % 3) * 0.08,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full bg-brand-paper font-body text-[17px] leading-[1.65] text-brand-ink">
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
