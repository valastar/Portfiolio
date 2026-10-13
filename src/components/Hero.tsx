import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const { profile, socials } = portfolio;

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_320px]">
        <div>
          {profile.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-tint px-4 py-1.5 text-sm text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availableText}
            </p>
          )}

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-2xl text-accent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
            >
              View my projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-lg border border-ink px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-5 text-sm text-muted">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition hover:text-ink hover:decoration-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-64 md:w-full">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border-2 border-accent" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            className="relative aspect-square w-full rounded-3xl bg-tint object-cover"
          />
        </div>
      </div>
    </section>
  );
}
