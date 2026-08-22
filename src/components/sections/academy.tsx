import { courses, domains } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { ExternalIcon } from '@/components/ui/icons';

export function Academy() {
  return (
    <section id="academy" className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="BioPC Academy"
          title={
            <>
              Courses that end in <span className="text-gradient">a real deliverable</span>
            </>
          }
          lede="Live, mentor-led cohorts taught by working researchers. Every programme finishes with something you can show — an analysis, a manuscript draft, a certificate."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courses.map((course, i) => {
            const running = course.status === 'Running';
            return (
              <Reveal key={course.name} delay={i * 110} className="h-full">
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card group flex h-full flex-col p-8 ${running ? 'animate-glow-pulse border-accent-300' : ''}`}
                >
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      running
                        ? 'bg-teal-400/15 text-teal-600 dark:text-teal-300'
                        : 'bg-[rgb(var(--bg-subtle))] text-muted'
                    }`}
                  >
                    {running && <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />}
                    {running ? 'Registration open' : 'Previous cohort'}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{course.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{course.blurb}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.meta.map((m) => (
                      <span key={m} className="chip">
                        {m}
                      </span>
                    ))}
                  </div>

                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    {course.cta}
                    <ExternalIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <a href={domains.academy} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Browse the full course catalogue
              <ExternalIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
