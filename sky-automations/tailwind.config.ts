import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#4A9FFF',
        'blue-dark':    '#1A6BFF',
        /** Same as Trades / soft sections */
        'feature-section': '#F0F4FF',
        'bg-soft':      '#F0F4FF',
        'bg-dark':      '#070B14',
        'text-primary': '#0A0F1E',
        'text-secondary':'#6B7280',
        'green-check':  '#00D68F',
        'border-light': 'rgba(0,0,0,0.06)',
        'border-blue':  'rgba(74,159,255,0.25)',
      },
      fontFamily: {
        syne:   ['var(--font-syne)', 'sans-serif'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:     '0 4px 32px rgba(74,159,255,0.08)',
        'card-lg':'0 8px 48px rgba(74,159,255,0.12)',
        phone:    '0 40px 60px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

export default config
