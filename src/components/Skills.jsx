import SectionHead from './SectionHead.jsx';
import { skills, skillsCopy } from '../data/portfolio.js';
import { stack40, wrap } from '../lib/styles.js';

export default function Skills() {
  return (
    <section id="keahlian" className="py-24">
      <div className={`${wrap} ${stack40}`}>
        <SectionHead eyebrow={skillsCopy.eyebrow} title={skillsCopy.title} />
        <div className="flex flex-wrap gap-x-8 gap-y-10">
          {skills.map((group) => (
            <div
              className="flex min-w-0 flex-1 basis-[240px] flex-col gap-4 border-t-2 border-brand-ink pt-5"
              key={group.title}
            >
              <h3 className="font-head text-xl font-semibold leading-[1.25]">{group.title}</h3>
              <ul className="flex list-none flex-col gap-[10px] p-0 text-[15.5px] leading-[1.5]">
                {group.items.map((it) => (
                  <li key={it.text}>{it.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
