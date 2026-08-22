import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { ThemeScript } from '@/components/ui/theme';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.org} — ${site.tagline}`,
  description: site.description,
  keywords: [
    'bioinformatics',
    'BioPC',
    'molecular dynamics simulation',
    'computational biology',
    'bioinformatics training Bangladesh',
    'Biology and Bioinformatics Olympiad',
    'research internship',
  ],
  authors: [{ name: site.org, url: site.url }],
  creator: site.org,
  alternates: { canonical: site.url },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.org,
    title: `${site.org} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.org} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#080b1a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
