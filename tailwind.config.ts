import type { Config } from 'tailwindcss';

/**
 * Ported verbatim from courses.biopc.org so the main site and the Academy
 * share one palette. Changing a brand ramp here means changing it there too.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#bcd2ff',
          300: '#8eb5ff',
          400: '#598cff',
          500: '#3563f0',
          600: '#1f45d6',
          700: '#1b37ad',
          800: '#1c318a',
          900: '#1c2e6e',
          950: '#131d43',
        },
        accent: {
          50: '#f4f1ff',
          100: '#ebe4ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#8344ff',
          600: '#7521f7',
          700: '#6415d8',
          800: '#5314af',
          900: '#45138c',
          950: '#2a0a5e',
        },
        teal: {
          300: '#5ee0ea',
          400: '#22c9d6',
          500: '#12aebb',
          600: '#0d8b96',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #1f45d6 0%, #7521f7 100%)',
        'brand-radial': 'radial-gradient(60% 60% at 50% 0%, rgba(117,33,247,0.18) 0%, rgba(31,69,214,0) 100%)',
        'helix-grid':
          'linear-gradient(to right, rgba(117,33,247,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(117,33,247,0.07) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(117, 33, 247, 0.45)',
        card: '0 10px 40px -12px rgba(19, 29, 67, 0.18)',
        lift: '0 26px 60px -18px rgba(19, 29, 67, 0.3)',
      },
      borderRadius: { '4xl': '2rem' },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(117, 33, 247, 0.38)' },
          '50%': { boxShadow: '0 0 0 14px rgba(117, 33, 247, 0)' },
        },
        nudgeX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'glow-pulse': 'glowPulse 2.6s ease-out infinite',
        'nudge-x': 'nudgeX 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
