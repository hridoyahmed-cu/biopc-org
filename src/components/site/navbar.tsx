'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { nav, site, domains, type NavGroup } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/theme';
import { ExternalIcon } from '@/components/ui/icons';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** A top-level nav item that owns a dropdown panel. */
function Dropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hovered = useRef(false);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        hovered.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        cancelClose();
        hovered.current = false;
        closeTimer.current = setTimeout(() => setOpen(false), 150);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        // Hover already opened it for mouse users, so a click there must not
        // toggle it shut; touch and keyboard never hover, so those still toggle.
        onClick={() => setOpen((v) => (hovered.current ? true : !v))}
        className="flex items-center gap-1 text-sm font-medium text-muted transition hover:text-accent-600"
      >
        {group.label}
        <Chevron open={open} />
      </button>

      {/* pt-3 keeps a hover bridge between the trigger and the panel */}
      <div className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${open ? 'block' : 'hidden'}`}>
        <ul className="surface min-w-[19rem] rounded-2xl p-2 shadow-card">
          {group.items?.map((item) => (
            <li key={item.href + item.label}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[rgb(var(--bg-subtle))] hover:text-accent-600"
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.note && (
                    <span className="rounded-full bg-teal-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300">
                      {item.note}
                    </span>
                  )}
                </span>
                {item.external && <ExternalIcon className="h-3.5 w-3.5 shrink-0 text-muted" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The mobile sheet covers the page, so the body behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'glass shadow-card' : 'bg-transparent'}`}
    >
      <nav className="container-tight flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.org} home`}>
          <Image src="/logo.png" alt={`${site.org} logo`} width={38} height={38} className="rounded-full" priority />
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-tight">{site.org}</span>
            <span className="hidden text-[11px] font-medium text-muted sm:block">{site.tagline}</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {nav.map((group) =>
            group.items ? (
              <Dropdown key={group.label} group={group} />
            ) : (
              <a
                key={group.label}
                href={group.href}
                className="text-sm font-medium text-muted transition hover:text-accent-600"
              >
                {group.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href={domains.internship} target="_blank" rel="noopener noreferrer" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Join BioPC
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="surface flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-5 pb-8 pt-4 lg:hidden">
          {nav.map((group) => (
            <div key={group.label} className="border-b border-[rgb(var(--border))] py-3 last:border-0">
              <a
                href={group.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display text-sm font-semibold uppercase tracking-wide"
              >
                {group.label}
              </a>
              {group.items && (
                <ul className="mt-2 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.href + item.label}>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 py-1 text-sm text-muted"
                      >
                        {item.label}
                        {item.note && (
                          <span className="rounded-full bg-teal-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300">
                            {item.note}
                          </span>
                        )}
                        {item.external && <ExternalIcon className="h-3 w-3 shrink-0" />}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a
            href={domains.internship}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Join BioPC
          </a>
        </div>
      )}
    </header>
  );
}
