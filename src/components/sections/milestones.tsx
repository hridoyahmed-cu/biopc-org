import { milestones } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';

export function Milestones() {
  return (
    <section id="milestones" className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Milestones"
          title={
            <>
              From one online course <span className="text-gradient">to a research center</span>
            </>
          }
          lede="Every signature programme BioPC has run since 2021 — the courses, the olympiads, the first publication, and the move offline."
        />

        <div className="relative mt-14">
          {/* Spine of the timeline, hidden on mobile where cards stack */}
          <div
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500 via-accent-500 to-teal-400 sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {milestones.map((m, i) => (
              <li key={m.title}>
                <Reveal delay={i * 60}>
                  <div className="flex gap-6">
                    <span
                      className="mt-6 hidden h-4 w-4 shrink-0 rounded-full border-4 border-[rgb(var(--bg-subtle))] bg-accent-500 sm:block"
                      aria-hidden="true"
                    />
                    <div className="surface flex-1 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-card">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-sm font-extrabold text-gradient">{m.year}</span>
                        <h3 className="font-display text-base font-bold">{m.title}</h3>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
