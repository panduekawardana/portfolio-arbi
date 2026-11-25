import { eyebrowRed, hSection, sectionHead } from '../lib/styles.js';

export default function SectionHead({ eyebrow, title, className = '' }) {
  return (
    <div className={`${sectionHead} ${className}`.trim()}>
      <p className={eyebrowRed}>{eyebrow}</p>
      <h2 className={hSection}>{title}</h2>
    </div>
  );
}
