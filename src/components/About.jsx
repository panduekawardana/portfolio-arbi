import SectionHead from './SectionHead.jsx';
import { about } from '../data/portfolio.js';
import fotoSirkuit from '../assets/images/foto-sirkuit-mandalika.jpg';
import { stack40, wrap } from '../lib/styles.js';

export default function About() {
  return (
    <section id="tentang" className="py-20">
      <div className={`${wrap} ${stack40}`}>
        <SectionHead eyebrow={about.eyebrow} title={about.title} />
        <div className="grid items-start gap-x-12 gap-y-10 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)]">
          <img
            className="block aspect-[4/4] w-full max-w-[300px] rounded-[4px] object-cover object-[center_100%]"
            src={fotoSirkuit}
            alt="Arbi Maulidi Anggito berdiri dengan tangan bersilang di lintasan Sirkuit Mandalika"
          />
          <div className="flex min-w-0 max-w-180 flex-col gap-5 text-pretty">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
