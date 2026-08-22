import { pillars, site, programPhotos } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { AcademyIcon, ArrowIcon, ExternalIcon, OlympiadIcon, ResearchIcon, ServicesIcon } from '@/components/ui/icons';

const icons = {
  academy: AcademyIcon,
  research: ResearchIcon,
  services: ServicesIcon,
  olympiad: OlympiadIcon,
};

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              One center, <span className="text-gradient">four things we do</span>
            </>
          }
          lede={`${site.org} began in ${site.founded} as a single online bioinformatics course. It is now a research and training center: we teach, we publish, we run simulations for other groups, and we bring students together through a national olympiad.`}
        />

        {/* Mission / vision, stated plainly before the pillar cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="surface h-full rounded-3xl p-7">
              <span className="eyebrow">Mission</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                To engage students in real research from the undergraduate level — giving them the methods, the mentorship
                and the publication experience that a developing research economy rarely offers, and building the
                career-oriented skills the field actually asks for.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface h-full rounded-3xl p-7">
              <span className="eyebrow">Vision</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Bioinformatics lowers the cost of entry to research to a laptop and a mentor. We use that to close the
                gap for students in Bangladesh and beyond, and to produce researchers who can contribute nationally and
                internationally.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal key={pillar.id} delay={i * 90} className="h-full">
                <a
                  href={pillar.href}
                  target={pillar.external ? '_blank' : undefined}
                  rel={pillar.external ? 'noopener noreferrer' : undefined}
                  className="card group flex h-full flex-col p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-5 text-[11px] font-bold uppercase tracking-wider text-accent-600">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-snug">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    {pillar.cta}
                    {pillar.external ? (
                      <ExternalIcon className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* The real programme posters, so the claims above have evidence.
            Laid out in CSS columns rather than a grid: these are designed
            artwork of differing shapes, and a grid can only make them line up
            by cropping them. Columns let every poster keep its own aspect
            ratio and still tile without gaps. */}
        <Reveal delay={120}>
          <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {programPhotos.map((poster) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={poster.src}
                src={poster.src}
                alt={poster.alt}
                width={poster.w}
                height={poster.h}
                loading="lazy"
                className="mb-4 w-full break-inside-avoid rounded-2xl border border-[rgb(var(--border))] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
