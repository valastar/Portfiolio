export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[220px_1fr] md:gap-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
