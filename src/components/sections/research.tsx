import { papers, manuscripts, projects, domains } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { ArrowIcon, ExternalIcon } from '@/components/ui/icons';

/** Q1 is the claim reviewers check first, so it gets its own colour. */
function TierBadge({ tier }: { tier: string }) {
  const q1 = tier === 'Q1';
  return (
    <span
      className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wide ${
        q1 ? 'bg-teal-400/15 text-teal-600 dark:text-teal-300' : 'bg-accent-500/10 text-accent-600 dark:text-accent-300'
      }`}
    >
      {tier}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const live = status === 'Published';
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        live ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300' : 'bg-[rgb(var(--bg-subtle))] text-muted'
      }`}
    >
      {status}
    </span>
  );
}

export function Research() {
  return (
    <section id="publications" className="py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Research & Publications"
          title={
            <>
              Peer-reviewed work, and <span className="text-gradient">the work in progress</span>
            </>
          }
          lede="Four published papers, two of them in Q1 journals, alongside three bench-led cohort studies currently being written up. Status is stated on every entry — nothing in preparation is presented as published."
        />

        {/* Published papers */}
        <div className="mt-14 space-y-4">
          {papers.map((paper, i) => {
            const Wrapper = paper.href ? 'a' : 'div';
            return (
              <Reveal key={paper.title} delay={i * 70}>
                <Wrapper
                  {...(paper.href ? { href: paper.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`surface group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 sm:flex-row sm:items-start ${
                    paper.href ? 'hover:-translate-y-1 hover:border-accent-300 hover:shadow-card' : ''
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-2 sm:w-28 sm:flex-col sm:items-start sm:gap-1.5">
                    <span className="font-display text-2xl font-extrabold text-gradient">{paper.year}</span>
                    <TierBadge tier={paper.tier} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold leading-snug">{paper.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                      <span className="italic">{paper.journal}</span> · {paper.publisher}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <StatusBadge status={paper.status} />
                      <span className="chip">{paper.role}</span>
                      <span className="chip">{paper.domain}</span>
                    </div>
                    {paper.doi && <p className="mt-3 font-mono text-xs text-muted">DOI: {paper.doi}</p>}
                    {!paper.href && (
                      <p className="mt-3 text-xs text-muted">
                        Accepted; the article page and DOI follow on final publication.
                      </p>
                    )}
                  </div>

                  {paper.href && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-accent-600">
                      Read
                      <ExternalIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        {/* Manuscripts in preparation */}
        <div id="manuscripts" className="mt-20 scroll-mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">In preparation</span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">Bench-led cohort studies</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Data generated at the bench — DNA extraction, PCR, Sanger sequencing, targeted panels and exomes —
                  then interpreted computationally. All three are being written up.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {manuscripts.map((m, i) => (
              <Reveal key={m.title} delay={i * 90} className="h-full">
                <div className="surface flex h-full flex-col rounded-2xl border-l-4 border-l-accent-400 p-6">
                  <span className="inline-flex w-fit rounded-full bg-[rgb(var(--bg-subtle))] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    {m.status}
                  </span>
                  <h4 className="mt-3 font-display text-base font-bold leading-snug">{m.title}</h4>
                  <p className="mt-2 text-xs font-semibold text-accent-600">{m.cohort}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{m.finding}</p>
                  <span className="chip mt-4 w-fit">{m.domain}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Running projects */}
        <div id="projects" className="mt-20 scroll-mt-24">
          <Reveal>
            <span className="eyebrow">Ongoing</span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">Running bioinformatics projects</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              A selection from the active project register — variant profiling, lead optimisation, reverse vaccinology
              and pipeline development.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <div className="surface flex h-full items-start gap-4 rounded-2xl p-5">
                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                      p.status === 'Ongoing' ? 'bg-teal-400' : p.status === 'Submitted' ? 'bg-accent-500' : 'bg-brand-400'
                    }`}
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug">{p.title}</h4>
                    <p className="mt-1.5 text-xs text-muted">
                      {p.field} · {p.status}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href={domains.founderPublications} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Full publication list
              <ExternalIcon className="h-4 w-4" />
            </a>
            <a href={domains.founderProjects} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              All research projects
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
