import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/portfolio.js';

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function SiteHeader({ logoHref = '#' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const handleBreakpoint = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktop.addEventListener('change', handleBreakpoint);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktop.removeEventListener('change', handleBreakpoint);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="relative flex items-center justify-between gap-4 pt-4"
    >
      <a
        className="font-head flex min-h-11 items-center text-xl font-bold tracking-[0.02em] no-underline hover:text-brand-accent-dark"
        href={logoHref}
      >
        {profile.initials}
      </a>
      <nav
        className="hidden flex-wrap items-center justify-end gap-x-2 text-[15px] md:flex"
        aria-label="Navigasi utama"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-[10px] text-brand-muted-dark no-underline hover:text-brand-muted-dark focus-visible:outline-brand-accent-dark"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] border border-[#5a626e] text-brand-paper hover:text-brand-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent-dark md:hidden"
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav
        id="menu-mobile"
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute left-0 right-0 top-full z-30 mt-2 flex-col rounded-[4px] border border-[#3a414c] bg-[#14181f] p-2 shadow-xl md:hidden`}
        aria-label="Navigasi mobile"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex min-h-11 items-center rounded-[4px] px-3 text-[15px] text-brand-muted-dark no-underline hover:bg-[#232a35] hover:text-brand-paper focus-visible:outline-brand-accent-dark"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
