/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain files, so the whole site is pre-rendered to /out.
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // next/image has no optimiser on a static host; ship the source files.
  images: { unoptimized: true },
  // Directory-style URLs (/about/index.html) so Pages resolves them without
  // a trailing-slash redirect.
  trailingSlash: true,
};

export default nextConfig;
