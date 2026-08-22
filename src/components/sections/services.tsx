import { services, figures, domains } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { ExternalIcon } from '@/components/ui/icons';

export function Services() {
  return (
    <section id="services" className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="MD Simulation Service"
          title={
            <>
              Molecular dynamics, <span className="text-gradient">publication-ready</span>
            </>
          }
          lede="GPU-accelerated production runs from 100 ns to 5 microseconds in GROMACS, Desmond and AMBER — returned as figures, data tables, analysis scripts and a written interpretation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.number} delay={i * 70} className="h-full">
                <div className="surface h-full rounded-2xl p-5">
                  <span className="font-display text-xs font-bold text-accent-600">{s.number}</span>
                  <h3 className="mt-2 text-sm font-bold leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Real output from delivered projects, not stock illustration */}
          <Reveal delay={120}>
            <div className="surface h-full rounded-3xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Sample deliverables</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {figures.map((f) => (
                  <figure key={f.src} className="group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.src}
                      alt={`${f.label} analysis figure`}
                      loading="lazy"
                      className="aspect-square w-full rounded-xl border border-[rgb(var(--border))] bg-white object-contain p-1.5 transition duration-300 group-hover:scale-[1.04]"
                    />
                    <figcaption className="mt-1.5 text-center text-[10px] font-medium text-muted">{f.label}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                Every figure ships with the raw trajectory, topology and parameter files, CSV data tables, and the
                analysis scripts needed to regenerate it.
              </p>
              <a
                href={domains.services}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full"
              >
                Visit services.biopc.org
                <ExternalIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
