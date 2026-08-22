import Image from 'next/image';
import { team, partners, domains } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { ExternalIcon } from '@/components/ui/icons';

function MemberCard({ member, delay }: { member: (typeof team)[number]; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
        <Image
          src={member.photo}
          alt={member.name}
          width={420}
          height={480}
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Name plate is always visible; the role slides up on hover so the
            grid reads as faces first and detail second. */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 via-brand-950/70 to-transparent p-4 pt-10 text-white">
          <p className="font-display text-sm font-bold leading-tight">{member.name}</p>
          <p className="mt-0.5 text-[11px] font-medium text-teal-300">{member.role}</p>
          <p className="mt-1 max-h-0 overflow-hidden text-[10px] leading-snug text-white/75 transition-all duration-300 group-hover:max-h-20">
            {member.dept}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Team() {
  return (
    <section id="team" className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              The people behind <span className="text-gradient">BioPC</span>
            </>
          }
          lede="A core team drawn from genetic engineering, biochemistry, pharmacy, zoology, botany, soil science and fisheries — across seven universities."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} delay={i * 60} />
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 text-center">
            <a href={`${domains.olympiad}/#team`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              See all BioPC members
              <ExternalIcon className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-muted">
              Organising, promotional, cultural, outreach and graphics &amp; media teams — over forty members in total.
            </p>
          </div>
        </Reveal>

        {/* Community partners */}
        <div className="mt-20">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-wider text-muted">
              Community partners
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-track flex w-max animate-marquee gap-10">
                {/* Duplicated once so the -50% translate loops seamlessly */}
                {[...partners, ...partners].map((p, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={`${p.name}-${i}`}
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    className="h-16 w-auto shrink-0 rounded-xl object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
