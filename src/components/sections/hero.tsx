import type { CSSProperties } from 'react';

import { site, domains, heroPhotos } from '@/lib/site';
import { ArrowIcon } from '@/components/ui/icons';

/**
 * Where each frame sits in the two-column mosaic. The first photo is the tall
 * one down the left; it carries no aspect ratio of its own because it stretches
 * to whatever the two frames beside it add up to.
 */
const tileShape = ['row-span-2', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[4/3]'];

/** How far apart the frames float in, in milliseconds. */
const STAGGER = 170;

/**
 * The hero visual: a small gallery of the work itself - a teaching session, a
 * lab bench, a full workshop hall - whose frames float in one after another
 * and then settle into a slow drift.
 */
function HeroGallery() {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="relative">
        <div className="absolute inset-0 -z-10 scale-110 bg-brand-radial blur-2xl" aria-hidden="true" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {heroPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`photo-float ${tileShape[i] ?? 'aspect-[4/3]'}`}
              style={{ '--float-delay': `${i * STAGGER}ms` } as CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                /* The hero is the first thing on screen, so these load eagerly
                   - lazily loaded frames would float in to empty boxes. */
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out"
              />
            </figure>
          ))}
        </div>
      </div>

      {/* The single BioPC slogan. Tracking tightens on narrow screens so it
          stays on one line rather than breaking mid-slogan. */}
      <p className="mt-8 text-center font-display text-sm font-bold uppercase tracking-[0.12em] sm:text-xl sm:tracking-[0.2em]">
        <span className="text-gradient">{site.slogan}</span>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-helix-grid [background-size:44px_44px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-brand-radial" aria-hidden="true" />

      <div className="container-tight grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">Since {site.founded} · Bangladesh</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">BioPC</span>
            <span className="mt-2 block text-2xl font-bold text-[rgb(var(--fg))] sm:text-3xl lg:text-4xl">
              {site.tagline}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We train biologists to compute, publish peer-reviewed research, run GPU molecular dynamics for other
            laboratories, and host the national Biology &amp; Bioinformatics Olympiad — from one center, in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={domains.internship} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join a training programme
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#publications" className="btn-secondary">
              Explore our research
            </a>
          </div>
        </div>

        <HeroGallery />
      </div>
    </section>
  );
}
