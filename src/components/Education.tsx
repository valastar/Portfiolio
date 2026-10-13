import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolio;

  return (
    <Section id="education" title={education.title}>
      <ol className="space-y-8">
        {education.items.map((item, i) => (
          <li key={i} className="border-b border-line pb-8 last:border-0">
            <p className="text-sm text-muted">{item.period}</p>
            <h3 className="font-display text-xl font-semibold">{item.school}</h3>
            <p className="text-accent">{item.degree}</p>
            <p className="mt-2 max-w-2xl text-muted">{item.description}</p>
          </li>
        ))}
      </ol>

      <h3 className="mb-4 mt-4 font-display text-lg font-semibold">
        Certifications
      </h3>
      <ul className="space-y-2">
        {education.certifications.map((c, i) => (
          <li key={i} className="flex justify-between gap-4 text-muted">
            <span>
              <span className="text-ink">{c.name}</span>, {c.issuer}
            </span>
            <span>{c.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
