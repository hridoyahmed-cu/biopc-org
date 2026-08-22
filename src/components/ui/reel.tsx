'use client';

import { useEffect, useRef } from 'react';

/**
 * The service reel: no bytes on page load, but playable no matter what.
 *
 * Plain `autoPlay` would defeat `preload="none"` - the browser honours the
 * autoplay and fetches several megabytes on every visit, for a section most
 * visitors never scroll to. So autoplay is driven by an observer instead.
 *
 * The sources stay in the markup rather than being attached on intersection.
 * `preload="none"` already means nothing is fetched until playback is asked
 * for, and keeping them present is what makes the failure mode safe: if the
 * observer never runs - no JavaScript, a throttled tab, an extension - the
 * poster and the controls are still a working video. Autoplay is decoration;
 * it is never what makes the reel playable.
 */
export function ServiceReel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') return;
    // Starting a video the visitor has not reached is worse than not starting
    // it, so respect the reduced-motion preference and leave it on the poster.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        // Autoplay can still be refused; the controls cover that.
        void el.play().catch(() => {});
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="aspect-video w-full rounded-xl bg-brand-950 object-cover"
      poster="/video/biopc-md-reel-poster.webp"
      muted
      loop
      playsInline
      controls
      disablePictureInPicture
      preload="none"
      aria-label="BioPC molecular dynamics simulation service overview reel"
    >
      <source src="/video/biopc-md-reel.webm" type="video/webm" />
      <source src="/video/biopc-md-reel.mp4" type="video/mp4" />
      {/* Shown only where <video> is unsupported entirely */}
      Your browser cannot play this video.{' '}
      <a href="/video/biopc-md-reel.mp4">Download the reel</a> instead.
    </video>
  );
}
