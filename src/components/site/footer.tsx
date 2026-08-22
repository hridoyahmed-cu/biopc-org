import Image from 'next/image';
import { site, domains } from '@/lib/site';
import { FacebookIcon, LinkedInIcon, MailIcon, UsersIcon } from '@/components/ui/icons';

const columns = [
  {
    title: 'Academy',
    links: [
      { label: 'Research Internship 4.0', href: domains.internship },
      { label: 'R Programming for Biologists', href: domains.rProgramming },
      { label: 'All courses', href: domains.academy },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Published papers', href: '#publications' },
      { label: 'Manuscripts in preparation', href: '#manuscripts' },
      { label: 'Ongoing projects', href: '#projects' },
      { label: 'Research programme', href: domains.founderResearch },
    ],
  },
  {
    title: 'Services & Events',
    links: [
      { label: 'MD simulation service', href: domains.services },
      { label: 'Request a quotation', href: domains.services + '/#quotation' },
      { label: 'Olympiad 3.0', href: domains.olympiad },
      { label: 'Olympiad results', href: domains.olympiadResults },
      { label: 'Certificates', href: domains.olympiadCertificates },
    ],
  },
  {
    title: 'Organisation',
    links: [
      { label: 'About BioPC', href: '#about' },
      { label: 'Milestones', href: '#milestones' },
      { label: 'Team', href: '#team' },
      { label: "Founder's profile", href: domains.founder },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export function Footer() {
  // Rendered at build time. The export is rebuilt on every push, so this stays
  // current without shipping a clock to the browser.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-14">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.7fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt={`${site.org} logo`} width={42} height={42} className="rounded-full" />
              <span>
                <span className="block font-display text-xl font-bold">{site.org}</span>
                <span className="block text-xs text-muted">{site.tagline}</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={site.social.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioPC on Facebook"
                className="surface flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:text-accent-600"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioPC on LinkedIn"
                className="surface flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:text-accent-600"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioPC community group"
                className="surface flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:text-accent-600"
              >
                <UsersIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className="surface flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:text-accent-600"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 font-semibold">{col.title}</p>
                <ul className="space-y-2 text-muted">
                  {col.links.map((link) => {
                    const external = link.href.startsWith('http');
                    return (
                      <li key={link.href + link.label}>
                        <a
                          href={link.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="transition hover:text-accent-600"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.org} — {site.tagline}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-accent-600">
              {site.email}
            </a>
            <a href={`mailto:${site.altEmail}`} className="hover:text-accent-600">
              {site.altEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
