import Image from 'next/image';
import { site, domains } from '@/lib/site';
import { ArrowIcon } from '@/components/ui/icons';

/**
 * Abstract protein-ligand binding graphic. Drawn inline rather than shipped as
 * a raster so it stays sharp at any size and inherits the brand palette.
 */
function BindingGraphic() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Abstract protein-ligand binding structure">
      <defs>
        <linearGradient id="hero-strand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f45d6" />
          <stop offset="60%" stopColor="#7521f7" />
          <stop offset="100%" stopColor="#22c9d6" />
        </linearGradient>
        <radialGradient id="hero-pocket" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#7521f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7521f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="160" cy="160" r="120" fill="url(#hero-pocket)" />

      {/* Two backbone strands twisting around the binding pocket */}
      <path
        d="M70 40 C150 90, 150 150, 70 200 C0 250, 30 280, 90 288"
        fill="none"
        stroke="url(#hero-strand)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M250 40 C170 90, 170 150, 250 200 C320 250, 290 280, 230 288"
        fill="none"
        stroke="url(#hero-strand)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Base-pair rungs */}
      {[
        [92, 66, 228, 66],
        [118, 104, 202, 104],
        [128, 142, 192, 142],
        [118, 180, 202, 180],
        [92, 218, 228, 218],
        [76, 254, 244, 254],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#hero-strand)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}

      {/* Ligand: a small node cluster docked in the pocket */}
      <g>
        <line x1="160" y1="142" x2="142" y2="162" stroke="#22c9d6" strokeWidth="3" />
        <line x1="160" y1="142" x2="180" y2="160" stroke="#22c9d6" strokeWidth="3" />
        <line x1="142" y1="162" x2="158" y2="184" stroke="#22c9d6" strokeWidth="3" />
        <line x1="180" y1="160" x2="158" y2="184" stroke="#22c9d6" strokeWidth="3" />
        <circle cx="160" cy="142" r="8" fill="#7521f7" />
        <circle cx="142" cy="162" r="7" fill="#22c9d6" />
        <circle cx="180" cy="160" r="7" fill="#1f45d6" />
        <circle cx="158" cy="184" r="6" fill="#22c9d6" />
      </g>
    </svg>
  );
}

/**
 * Hero visual. Per the BioPC design brief the mark rotates to reveal a
 * protein-ligand structure and back again, on a continuous loop. Two faces of
 * one 3D card, so the rotation is a single GPU transform - and it stops
 * entirely under prefers-reduced-motion via the global utility.
 */
function RotatingMark() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" style={{ perspective: '1400px' }}>
      <div className="absolute inset-0 rounded-full bg-brand-radial blur-2xl" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-spin-slow"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="surface absolute inset-0 flex items-center justify-center rounded-full p-12 shadow-glow"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image src="/logo.png" alt={`${site.org} logo`} width={280} height={280} className="h-full w-full object-contain" priority />
        </div>
        <div
          className="surface absolute inset-0 flex items-center justify-center rounded-full p-10 shadow-glow"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <BindingGraphic />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-helix-grid [background-size:44px_44px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-brand-radial" aria-hidden="true" />

      <div className="container-tight grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
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
            laboratories, and host the national Biology &amp; Bioinformatics Olympiad — from one lab, in one place.
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

          <p className="mt-8 max-w-md border-l-2 border-accent-400 pl-4 text-sm italic leading-relaxed text-muted">
            &ldquo;{site.quote}&rdquo;
          </p>
        </div>

        <RotatingMark />
      </div>
    </section>
  );
}
