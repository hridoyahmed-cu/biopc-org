'use client';

import { useEffect, useState } from 'react';

/**
 * Applies the stored theme before first paint, and arms the reveal animations.
 * Rendered in <head>, so it runs ahead of hydration and a dark-mode visitor
 * never sees a white flash.
 *
 * `js-enabled` is what lets CSS hide un-revealed content, so this script also
 * owns removing it. That deadline is deliberately not React's job: if the app
 * bundle fails to load or hydration never runs, the class must still come off
 * or the whole page would stay invisible. Reveal is decoration - it is never
 * allowed to gate the content.
 */
export function ThemeScript() {
  const js = `(function(){var d=document.documentElement;d.classList.add('js-enabled');setTimeout(function(){d.classList.remove('js-enabled');},2500);try{var t=localStorage.getItem('biopc-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){d.classList.add('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('biopc-theme', next ? 'dark' : 'light');
    } catch {
      /* private browsing - the class still applies for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="surface flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:text-accent-600"
    >
      {/* Until the effect runs we do not know the theme; render the sun as a
          neutral placeholder rather than flashing the wrong icon. */}
      {ready && dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
