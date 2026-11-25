import SectionHead from './SectionHead.jsx';
import { certificates, certificatesCopy } from '../data/portfolio.js';
import { split, splitHead, wrap } from '../lib/styles.js';

export default function Certificates() {
  return (
    <section id="sertifikat" className="border-y border-brand-line bg-white py-24">
      <div className={`${wrap} ${split}`}>
        <SectionHead
          eyebrow={certificatesCopy.eyebrow}
          title={certificatesCopy.title}
          className={splitHead}
        />
        <div data-reveal className="flex min-w-0 flex-1 basis-[440px] flex-col gap-6">
          <p className="text-[15px] leading-[1.7] text-brand-muted">
            Lihat galeri lengkap sertifikat beserta gambarnya.
          </p>
          <div>
            {certificates.map((c) => (
              <div
                className="flex flex-wrap gap-x-8 gap-y-1 border-t border-brand-line py-[18px]"
                key={c.name}
              >
                <div className="min-w-0 flex-none basis-[180px] text-[15px] text-brand-muted tabular-nums">
                  {c.date}
                </div>
                <div className="min-w-0 flex-1 basis-[260px] text-[17px] font-medium">{c.name}</div>
              </div>
            ))}
          </div>
          <div>
            <a
              className="inline-flex min-h-12 items-center rounded-[4px] border border-brand-ink px-6 text-base font-semibold text-brand-ink no-underline hover:bg-brand-ink hover:text-brand-paper"
              href="#/sertifikat"
            >
              Lihat semua sertifikat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
