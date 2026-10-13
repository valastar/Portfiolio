import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolio;

  return (
    <Section id="skills" title={skills.title}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 font-display text-lg font-semibold">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-card px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
