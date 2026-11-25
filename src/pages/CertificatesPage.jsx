import { certificateGallery, certificatesCopy, profile } from '../data/portfolio.js';
import { wrap } from '../lib/styles.js';
import SiteHeader from '../components/SiteHeader.jsx';

export default function CertificatesPage() {
  return (
    <div className="w-full bg-brand-paper font-body text-[17px] leading-[1.65] text-brand-ink">
      <section className="relative isolate overflow-hidden bg-black text-brand-paper">
        <div className={`${wrap} relative z-10 pb-16`}>
          <SiteHeader />
          <div className="flex flex-col gap-6 pt-16">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-accent-dark">
              {certificatesCopy.eyebrow}
            </p>
            <h1 className="font-head text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance">
              {certificatesCopy.title}
            </h1>
            <p className="max-w-[640px] text-brand-muted-dark">
              Kumpulan {certificateGallery.length} sertifikat pelatihan dan kegiatan yang telah saya ikuti.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-white py-16">
        <div className={wrap}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificateGallery.map((certificate, index) => (
              <article
                className="flex min-w-0 flex-col overflow-hidden rounded-[4px] border border-brand-line bg-brand-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                data-reveal-card
                key={`${certificate.name}-${index}`}
              >
                {certificate.image && (
                  <a
                    className="block aspect-[4/3] overflow-hidden border-b border-brand-line bg-brand-paper"
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat sertifikat ${certificate.name}`}
                  >
                    <img
                      className="h-full w-full object-cover object-top"
                      src={certificate.image}
                      alt={certificate.name}
                      loading="lazy"
                    />
                  </a>
                )}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="font-head text-xl font-semibold leading-snug">{certificate.name}</h2>
                  {certificate.date && (
                    <p className="text-[15px] text-brand-muted">{certificate.date}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-10 text-[15px] text-brand-muted`}>
        <span>{profile.copyright}</span>
        <a className="font-medium text-brand-accent no-underline hover:text-brand-ink" href="#">
          Kembali ke beranda
        </a>
      </footer>
    </div>
  );
}
