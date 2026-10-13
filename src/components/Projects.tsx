import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolio;

  return (
    <Section id="projects" title={projects.title}>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.items.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="aspect-[16/10] w-full bg-tint object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-tint px-3 py-1 text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-5 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4"
                  >
                    Live demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    Source code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
