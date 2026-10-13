import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function About() {
  const { about, profile } = portfolio;

  return (
    <Section id="about" title={about.title}>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-base">Based in {profile.location}.</p>
      </div>

      <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
        {about.highlights.map((h) => (
          <div key={h.label}>
            <dd className="font-display text-4xl font-bold text-accent">
              {h.value}
            </dd>
            <dt className="mt-1 text-sm text-muted">{h.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}
