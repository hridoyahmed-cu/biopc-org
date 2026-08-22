import { domains } from '@/lib/site';
import { Reveal } from '@/components/ui/reveal';
import { ExternalIcon, OlympiadIcon } from '@/components/ui/icons';

const highlights = [
  { value: '3rd', label: 'Edition, 2026' },
  { value: '3,000+', label: 'Participants in a previous edition' },
  { value: '30+', label: 'Universities represented' },
  { value: 'Free', label: 'To enter' },
];

const links = [
  { label: 'Olympiad 3.0 site', href: domains.olympiad },
  { label: 'Results', href: domains.olympiadResults },
  { label: 'Certificates', href: domains.olympiadCertificates },
];

export function Olympiad() {
  return (
    <section id="olympiad" className="py-20 sm:py-24">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-brand-gradient p-8 text-white shadow-glow sm:p-12">
            {/* Decorative helix rings, kept subtle so the copy stays legible */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[24px] border-white/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[20px] border-white/10"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  <OlympiadIcon className="h-3.5 w-3.5" />
                  Flagship event
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Biology &amp; Bioinformatics Olympiad 3.0
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  A national competition built specifically for university students — two rounds, open to every
                  discipline in the life sciences, and free to enter. The previous edition drew close to three thousand
                  participants from more than thirty universities across Bangladesh.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={domains.olympiad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white px-6 py-3 text-brand-700 hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    Go to the Olympiad
                    <ExternalIcon className="h-4 w-4" />
                  </a>
                  {links.slice(1).map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-white/40 px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 80}>
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                      <p className="font-display text-2xl font-extrabold sm:text-3xl">{h.value}</p>
                      <p className="mt-1 text-xs leading-snug text-white/80">{h.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
