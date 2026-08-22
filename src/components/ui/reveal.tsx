'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** If the observer has not fired by now, show the content anyway. */
const FAILSAFE_MS = 1600;

/**
 * Scroll-triggered fade-up. Uses IntersectionObserver rather than an animation
 * library so the whole homepage ships without a runtime motion dependency.
 *
 * The hidden state lives in CSS behind `.js-enabled` (see globals.css) and is
 * backed by a failsafe timer, so content stays readable when scripting is off
 * and when the observer is throttled - a background tab, a hidden pane, an
 * extension that stubs the API. Reveal is decoration; it never gates content.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  /** Stagger in milliseconds, for grids that should cascade. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | null = null;
    const failsafe = setTimeout(() => {
      io?.disconnect();
      setShown(true);
    }, FAILSAFE_MS);

    const reveal = () => {
      clearTimeout(failsafe);
      io?.disconnect();
      setShown(true);
    };

    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      return;
    }

    // Anything already on screen at load should not wait for a scroll event.
    io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    io.observe(el);

    return () => {
      clearTimeout(failsafe);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`reveal ${shown ? 'reveal-shown' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p>}
    </Reveal>
  );
}
