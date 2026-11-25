import SectionHead from './SectionHead.jsx';
import { experience, experienceCopy, education } from '../data/portfolio.js';
import { eyebrowRed, stack40, wrap } from '../lib/styles.js';

export default function Experience() {
  return (
    <section id="pengalaman" className="border-y border-brand-line bg-white py-20">
      <div className={`${wrap} ${stack40}`}>
        <SectionHead eyebrow={experienceCopy.eyebrow} title={experienceCopy.title} />

        <div className="flex flex-col">
          {experience.map((job) => (
            <article
              className="grid gap-x-12 gap-y-3 border-t border-brand-line py-7 lg:grid-cols-[220px_minmax(0,1fr)]"
              key={`${job.period}-${job.role}`}
            >
              <p className="min-w-0 text-[15px] font-medium text-brand-muted tabular-nums lg:pt-1">
                {job.period}
              </p>
              <div className="flex min-w-0 flex-col gap-[10px]">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-head text-[21px] font-semibold leading-[1.25]">{job.role}</h3>
                  <p className="text-[15px] text-brand-muted">{job.org}</p>
                </div>
                <ul className="flex list-disc flex-col gap-[6px] pl-5 text-base">
                  {job.points.map((pt) => (
                    <li key={pt.text}>{pt.text}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <article
              className="box-border flex h-full min-w-0 flex-col gap-2 rounded-[6px] border border-brand-line bg-brand-paper p-7"
              key={e.label}
            >
              <p className={eyebrowRed}>{e.label}</p>
              <h3 className="font-head text-[21px] font-semibold leading-[1.25]">{e.title}</h3>
              <p className="text-base">{e.line}</p>
              <p className="text-[15px] text-brand-muted">{e.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
