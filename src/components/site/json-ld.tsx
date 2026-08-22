import { site, domains, founder } from '@/lib/site';

/**
 * Structured data for the organisation and its sub-sites. `sameAs` is what
 * tells search engines that the four biopc.org sub-domains and the founder's
 * personal site belong to one entity rather than five unrelated pages.
 */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ResearchOrganization', 'EducationalOrganization'],
        '@id': `${site.url}/#organization`,
        name: site.org,
        alternateName: `${site.org} — ${site.tagline}`,
        url: site.url,
        logo: `${site.url}/logo.png`,
        description: site.description,
        foundingDate: String(site.founded),
        email: site.email,
        founder: {
          '@type': 'Person',
          name: founder.name,
          jobTitle: founder.role,
          url: founder.href,
        },
        sameAs: [
          site.social.facebookPage,
          site.social.linkedin,
          domains.academy,
          domains.services,
          domains.olympiad,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.org,
        description: site.description,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
