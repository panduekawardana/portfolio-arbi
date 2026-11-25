import { contacts, contactCopy, profile } from '../data/portfolio.js';
import { eyebrowLight, stack64, wrap } from '../lib/styles.js';

export default function Contact() {
  return (
    <section id="kontak" className="bg-brand-ink pb-10 pt-24 text-brand-paper">
      <div className={`${wrap} ${stack64}`}>
        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-5">
            <p className={eyebrowLight}>{contactCopy.eyebrow}</p>
            <h2 className="font-head text-[clamp(36px,6vw,68px)] font-bold leading-none tracking-[-0.03em] text-balance">
              {contactCopy.title}
            </h2>
            <p className="max-w-[480px] text-brand-muted-dark">{contactCopy.text}</p>
          </div>

          <div className="flex min-w-0 flex-1 basis-[420px] flex-col">
            {contacts.map((c, i) => {
              const isLast = i === contacts.length - 1;
              const rowClass = `flex flex-wrap gap-x-6 gap-y-1 border-t border-[#3a414c] py-[18px]${
                isLast ? ' border-b' : ''
              }`;
              const valueClass = [
                'min-w-0 flex-1 basis-[240px] no-underline hover:text-brand-accent-dark',
                c.wrap ? '[overflow-wrap:anywhere]' : '',
                c.numeric ? 'tabular-nums' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <div className={rowClass} key={c.label}>
                  <div className="flex-none basis-[100px] text-sm text-brand-muted-dark">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a className={valueClass} href={c.href}>
                      {c.value}
                    </a>
                  ) : (
                    <div className={valueClass}>{c.value}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <footer className="text-sm text-brand-muted-dark">{profile.copyright}</footer>
      </div>
    </section>
  );
}
