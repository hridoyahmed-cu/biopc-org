import { site, domains } from '@/lib/site';
import { ArrowIcon } from '@/components/ui/icons';

/* Helix geometry, in the screen's user units. */
const CX = 120; // centre line of the helix
const AMP = 44; // half-width of the twist
const PERIOD = 96; // one full turn; the scroll animation shifts by exactly this
const TOP = -PERIOD; // start a turn above the screen
const BOTTOM = 288; // and finish one below, so the loop never shows an end
const RUNG_STEP = 12;

const phase = (y: number) => (2 * Math.PI * y) / PERIOD;

/** Sine strand sampled finely enough that the curve reads as smooth. */
function strandPath(sign: 1 | -1) {
  const points: string[] = [];
  for (let y = TOP; y <= BOTTOM; y += 4) {
    const x = CX + sign * AMP * Math.sin(phase(y));
    points.push(`${y === TOP ? 'M' : 'L'}${x.toFixed(1)} ${y}`);
  }
  return points.join(' ');
}

/**
 * Base pairs. Their length falls out of the geometry - it collapses to zero
 * where the strands cross - which is what sells the twist without needing to
 * split the strands into front and back halves.
 */
function rungs() {
  const out: { y: number; x1: number; x2: number; open: number; front: boolean }[] = [];
  for (let y = TOP; y <= BOTTOM; y += RUNG_STEP) {
    const s = Math.sin(phase(y));
    out.push({
      y,
      x1: CX + AMP * s,
      x2: CX - AMP * s,
      open: Math.abs(s), // 0 at a crossing, 1 at the widest point
      front: Math.cos(phase(y)) > 0,
    });
  }
  return out;
}

/** The animated double helix that lives on the screen. */
function DnaHelix() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" role="img" aria-label="Animated DNA double helix">
      <defs>
        <linearGradient id="strand-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8eb5ff" />
          <stop offset="100%" stopColor="#22c9d6" />
        </linearGradient>
        <linearGradient id="strand-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bea6ff" />
          <stop offset="100%" stopColor="#8344ff" />
        </linearGradient>
        {/* Fades the helix out at the top and bottom edges of the screen.
            A mask is read as luminance, so these stops must be WHITE - white
            keeps the pixel, black removes it. Black stops here hide the whole
            helix and leave the screen blank. */}
        <linearGradient id="helix-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="18%" stopColor="#fff" stopOpacity="1" />
          <stop offset="82%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="helix-mask">
          <rect x="0" y="0" width="240" height="200" fill="url(#helix-fade)" />
        </mask>
      </defs>

      <g mask="url(#helix-mask)">
        {/* Translating a helix along its axis is indistinguishable from
            rotating it, and it loops seamlessly at exactly one period. */}
        <g className="animate-helix">
          {rungs().map((r) => (
            <g key={r.y} opacity={0.25 + 0.6 * r.open}>
              <line
                x1={r.x1}
                y1={r.y}
                x2={r.x2}
                y2={r.y}
                stroke={r.front ? '#22c9d6' : '#9f75ff'}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <circle cx={r.x1} cy={r.y} r={1.6 + 1.8 * r.open} fill="#5ee0ea" />
              <circle cx={r.x2} cy={r.y} r={1.6 + 1.8 * r.open} fill="#bea6ff" />
            </g>
          ))}
          <path d={strandPath(1)} fill="none" stroke="url(#strand-a)" strokeWidth={4} strokeLinecap="round" />
          <path d={strandPath(-1)} fill="none" stroke="url(#strand-b)" strokeWidth={4} strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

/**
 * The hero visual: a computer displaying a living double helix. Bio on a PC -
 * the name of the organisation, drawn literally.
 */
function BioPcVisual() {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="relative">
        <div className="absolute inset-0 -z-10 scale-110 bg-brand-radial blur-2xl" aria-hidden="true" />

        {/* Monitor */}
        <div className="surface overflow-hidden rounded-3xl shadow-glow">
          {/* Bezel bar */}
          <div className="flex items-center justify-between border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
            </div>
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
              {site.org}
            </span>
          </div>

          {/* Screen */}
          <div className="relative aspect-[6/5] bg-brand-950">
            <div
              className="absolute inset-0 opacity-60"
              style={{ background: 'radial-gradient(70% 70% at 50% 45%, rgba(117,33,247,0.35) 0%, rgba(19,29,67,0) 100%)' }}
              aria-hidden="true"
            />
            {/* Positioned, so it paints above the glow rather than under it -
                an in-flow SVG would sit below the absolute div beside it. */}
            <div className="absolute inset-0">
              <DnaHelix />
            </div>
            {/* Faint scanlines, for the screen to read as a screen */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0 1px, transparent 1px 4px)',
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Stand and base */}
        <div className="mx-auto h-5 w-16 rounded-b-lg bg-gradient-to-b from-[rgb(var(--border))] to-transparent" aria-hidden="true" />
        <div className="mx-auto h-1.5 w-40 rounded-full bg-[rgb(var(--border))]" aria-hidden="true" />
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

        <BioPcVisual />
      </div>
    </section>
  );
}
