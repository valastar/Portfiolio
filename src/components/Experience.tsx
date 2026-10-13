import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolio;

  return (
    <Section id="experience" title={experience.title}>
      <ol className="space-y-10 border-l border-line pl-8">
        {experience.items.map((job, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-muted">{job.period}</p>
            <h3 className="font-display text-xl font-semibold">{job.role}</h3>
            <p className="text-accent">{job.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
