import SectionHead from './SectionHead.jsx';
import { highlights } from '../data/portfolio.js';
import { stack40, wrap } from '../lib/styles.js';

export default function Highlights() {
  return (
    <section id="sorotan" className="pb-24 pt-14">
      <div className={`${wrap} ${stack40}`}>
        <SectionHead eyebrow={highlights.eyebrow} title={highlights.title} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.items.map((item) => (
            <article
              className="box-border flex h-full min-w-0 flex-col gap-5 rounded-[6px] border border-brand-line bg-white p-8"
              key={item.title}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-teal">
                {item.period}
              </p>
              <div className="flex flex-col gap-1">
                <h3 className="font-head text-2xl font-semibold leading-[1.2] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-brand-muted">{item.org}</p>
              </div>
              <ul className="flex list-disc flex-col gap-[10px] pl-5 text-base">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <p className="mt-auto border-t border-brand-line pt-5 text-[15px] text-brand-muted">
                {item.foot}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
