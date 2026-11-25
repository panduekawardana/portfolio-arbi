import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';

function getRoute(hash) {
  return hash === '#/sertifikat' ? 'certificates' : 'home';
}

export default function App() {
  const rootRef = useRef(null);
  const [route, setRoute] = useState(() => getRoute(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route !== 'home') return;
    const hash = window.location.hash;
    if (!hash || hash === '#/sertifikat') return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [route]);

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
  }, [route]);

  if (route === 'certificates') {
    return (
      <div ref={rootRef} key="certificates">
        <CertificatesPage />
      </div>
    );
  }

  return (
    <div ref={rootRef} key="home" className="w-full bg-brand-paper font-body text-[17px] leading-[1.65] text-brand-ink">
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
