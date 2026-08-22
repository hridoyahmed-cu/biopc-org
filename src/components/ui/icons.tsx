/**
 * Inline stroke icons. The Academy pulls Font Awesome from a CDN; this site
 * ships them inline instead so the homepage has no third-party render blocker.
 */

type IconProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function AcademyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      <path d="M22 8v6" />
    </svg>
  );
}

export function ResearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3v6.5L4.2 17A2 2 0 006 20h12a2 2 0 001.8-3L15 9.5V3" />
      <path d="M8 3h8" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

export function ServicesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="19" cy="6" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M6.5 7.2l3.8 3.4M17.5 7.2l-3.8 3.4M6.5 16.8l3.8-3.4M17.5 16.8l-3.8-3.4" />
    </svg>
  );
}

export function OlympiadIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 5h5v5M19 5l-8 8M17 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h4" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.6 6C6.5 7.5 4.8 10.2 4.8 13.6c0 2.7 1.6 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.7 0-.9.1.4-1.6 1.7-3 3.5-3.9L9.6 6zm8.5 0c-3.1 1.5-4.8 4.2-4.8 7.6 0 2.7 1.6 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3-.3 0-.7 0-.9.1.4-1.6 1.7-3 3.5-3.9L18.1 6z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8 8 0 01-11.6 7.1L3 20.5l1.9-6A8 8 0 1121 11.5z" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0113 0" />
      <path d="M16 5.3a3.2 3.2 0 010 5.4M17.5 14.2A6.5 6.5 0 0121.5 20" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 21h4V9.5H3V21zm7 0h4v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h4v-7c0-3.6-.8-6-4.9-6-2 0-3.3 1.1-3.8 2.1h-.1V9.5h-3.5V21z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7.5v3H10v7h3v-7h2.7l.5-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}
