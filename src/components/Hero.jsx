import heroPhoto from '../assets/images/foto-hero.jpg';
import sirkuitPhoto from '../assets/images/foto-sirkuit-mandalika.jpg';
import { heroStats, profile } from '../data/portfolio.js';
import { eyebrowLight, wrap } from '../lib/styles.js';
import ProfileCard from './ProfileCard.tsx';
import { BackgroundBeams } from './ui/background-beams.tsx';
import SiteHeader from './SiteHeader.jsx';

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-black text-brand-paper"
      aria-label="Pengantar"
    >
      <BackgroundBeams className="opacity-30" />
      <div className={`${wrap} relative z-10 flex flex-col gap-14 pb-16`}>
        <SiteHeader />

        <div
          className="flex flex-wrap items-end justify-between gap-x-16 gap-y-12"
          id="atas"
        >
          <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-7">
            <p className={eyebrowLight}>{profile.location}</p>
            <h1 className="font-head text-[clamp(48px,8.4vw,108px)] font-bold leading-[0.96] tracking-[-0.035em] text-balance">
              {profile.name}
            </h1>
            <p className="max-w-[600px] text-md leading-[1.55] text-brand-muted-dark">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center rounded-[4px] bg-brand-accent px-6 text-base font-semibold text-white no-underline hover:text-white"
                href="#kontak"
              >
                Hubungi saya
              </a>
              <a
                className="inline-flex min-h-12 items-center rounded-[4px] border border-[#5a626e] px-6 text-base font-semibold text-brand-paper no-underline hover:text-brand-paper"
                href="#pengalaman"
              >
                Lihat pengalaman
              </a>
            </div>
          </div>

          <div data-reveal-card>
            <ProfileCard
              avatarUrl={sirkuitPhoto}
              miniAvatarUrl={heroPhoto}
              title=""
              name={profile.name}
              handle="arbi-anggito"
              status="Online"
              statusColor="#0e6b5c"
              contactText="Kontak"
              onContactClick={() => {
                window.location.hash = '#kontak';
              }}
              theme="dark"
              backdropColor="#14181f"
              radius={16}
            />
          </div>
        </div>

        <div className="flex flex-wrap border-t border-[#3a414c]">
          {heroStats.map((s) => (
            <div
              className="flex min-w-0 basis-[280px] grow flex-col gap-[6px] pr-6 pt-7"
              key={s.value}
            >
              <div className="font-head text-[48px] font-bold leading-none tracking-[-0.02em] tabular-nums">
                {s.value}
              </div>
              <div className="text-[15px] leading-[1.5] text-brand-muted-dark">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
