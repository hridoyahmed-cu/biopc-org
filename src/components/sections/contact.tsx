import { site, domains } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';
import { ChatIcon, ExternalIcon, FacebookIcon, LinkedInIcon, MailIcon, UsersIcon } from '@/components/ui/icons';

const channels = [
  {
    icon: MailIcon,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    detail: 'Research enquiries, collaborations, service quotations',
  },
  {
    icon: ChatIcon,
    label: 'WhatsApp',
    value: site.whatsapp,
    href: `https://wa.me/${site.whatsappHref}`,
    detail: 'Course and admission questions',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook page',
    value: 'facebook.com/BioPcLab',
    href: site.social.facebookPage,
    detail: 'Announcements and event coverage',
  },
  {
    icon: UsersIcon,
    label: 'Community group',
    value: 'BioPC learners group',
    href: site.social.facebookGroup,
    detail: 'Peer support and open discussion',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'BioPC — A Bioinformatics Lab',
    href: site.social.linkedin,
    detail: 'Organisation updates and openings',
  },
  {
    icon: MailIcon,
    label: 'Alternate email',
    value: site.altEmail,
    href: `mailto:${site.altEmail}`,
    detail: 'General correspondence',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Join us"
          title={
            <>
              Learn with us, or <span className="text-gradient">work with us</span>
            </>
          }
          lede="Students, researchers and laboratories are all welcome. Pick the channel that fits — we answer every one of them."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 70} className="h-full">
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card group flex h-full items-start gap-4 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">{c.label}</span>
                    <span className="mt-1 block truncate text-sm font-semibold group-hover:text-accent-600">
                      {c.value}
                    </span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-muted">{c.detail}</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <div className="mt-14 overflow-hidden rounded-4xl bg-brand-gradient p-8 text-center text-white shadow-glow sm:p-12">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              The next cohort is open
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Bioinformatics Research Internship 4.0 — four months, seven modules, real deliverables, and a route into
              BioPC research projects.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={domains.internship}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white px-6 py-3 text-brand-700 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Apply now
                <ExternalIcon className="h-4 w-4" />
              </a>
              <a
                href={domains.academy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/40 px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-white/10"
              >
                See all courses
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
