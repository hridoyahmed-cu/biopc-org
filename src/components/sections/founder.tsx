import Image from 'next/image';
import { founder, domains } from '@/lib/site';
import { Reveal } from '@/components/ui/reveal';
import { ExternalIcon, QuoteIcon } from '@/components/ui/icons';

export function Founder() {
  return (
    <section id="founder" className="py-20 sm:py-24">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
          <Reveal>
            <div className="mx-auto max-w-[340px] lg:sticky lg:top-24">
              <div className="group overflow-hidden rounded-3xl border border-[rgb(var(--border))] shadow-card">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={680}
                  height={850}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="font-display text-lg font-bold">{founder.name}</p>
                <p className="mt-1 text-sm font-semibold text-accent-600">{founder.role}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{founder.affiliation}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {founder.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={founder.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full"
              >
                View full academic profile
                <ExternalIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <QuoteIcon className="absolute -left-2 -top-6 h-20 w-20 text-accent-500/10" />
              <div className="relative">
                <span className="eyebrow">Message from the founder</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Welcome to <span className="text-gradient">BioPC</span>
                </h2>

                <div className="mt-6 space-y-5">
                  {founder.statement.map((para) => (
                    <p key={para.slice(0, 40)} className="text-base leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-8 border-t border-[rgb(var(--border))] pt-6">
                  <p className="font-display text-xl italic text-gradient">{founder.name}</p>
                  <p className="mt-1 text-sm text-muted">{founder.role}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={domains.founderResearch} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Research programme
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                  <a href={domains.founderPublications} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Publications
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                  <a href={domains.founderTeaching} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Teaching &amp; outreach
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                  <a href={domains.founderGallery} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Gallery
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
