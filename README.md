# biopc.org

Homepage of **BioPC — A Bioinformatics Lab of Research & Training**.

A single-page overview of the whole BioPC ecosystem: every section is a glimpse
of one property, with a button through to the site that owns it.

| Section | Links out to |
| --- | --- |
| Academy | [courses.biopc.org](https://courses.biopc.org) |
| Research & Publications | DOIs + [ahmedhridoy.com](https://ahmedhridoy.com) |
| MD Simulation Service | [services.biopc.org](https://services.biopc.org) |
| Olympiad | [olympiad.biopc.org](https://olympiad.biopc.org) |
| Founder | [ahmedhridoy.com](https://ahmedhridoy.com) |

## Stack

Next.js 14 (App Router) with a static export, Tailwind, no runtime UI
dependencies. The palette, fonts and component classes are ported from
`courses.biopc.org` so the main site and the Academy stay visually identical —
if a brand ramp changes in one, change it in both.

## Editing content

Everything on the page — nav, statistics, courses, papers, manuscripts,
projects, services, milestones, team, partners, contact channels — lives in
[`src/lib/site.ts`](src/lib/site.ts). Adding a course or a paper is an edit to
that file; no component changes are needed.

Every figure in there traces back to an existing BioPC property, the founder's
site, or the BioPC organisation brief. Please keep it that way: if a number
cannot be sourced, it does not belong on the page.

Publication status (`Published`, `In press`, `In preparation`) is rendered
explicitly on every entry. Work in preparation must never be presented as
published.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the export and publishes `./out` to GitHub Pages.

For the custom domain, `public/CNAME` pins `biopc.org` and `public/.nojekyll`
stops Pages from stripping the `_next/` directory. DNS must point the apex at
GitHub Pages:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <owner>.github.io.
```

## Accessibility notes

Scroll reveals are decoration and never gate content. The hidden state is
applied by CSS only under `.js-enabled`, which the head script adds and then
removes on a deadline it owns itself — so the page stays readable with
scripting off, and also if the app bundle fails to load or hydration never
runs. Counters render their real value until the animation actually starts,
and `prefers-reduced-motion` disables the motion entirely.
