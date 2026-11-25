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
        <div data-reveal className="flex min-w-0 flex-1 basis-[440px] flex-col">
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
      </div>
    </section>
  );
}
