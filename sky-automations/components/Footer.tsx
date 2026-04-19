import Link from 'next/link'

function CloudIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4 8.4C22.792 7.376 23.04 6.616 23.04 5.8C23.04 3.48 21.12 1.6 18.76 1.6C18.144 1.6 17.56 1.736 17.04 1.976C16.12 0.76 14.664 0 13.04 0C10.264 0 8.04 2.152 8.04 4.8C6.044 5.44 4.5 7.16 4.5 9.2C4.5 11.52 6.42 13.4 8.78 13.4H22.4C24.383 13.4 26 11.816 26 9.9"
        stroke="#4A9FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

const productLinks = [
  { label: "What's Included", href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How It Works', href: '/#how-it-works' },
]

const companyLinks = [
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#070B14',
        borderTop: '1px solid rgba(74,159,255,0.15)',
      }}
    >
      {/* Giant decorative wordmark */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        style={{ height: '100%' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(60px, 14vw, 180px)',
            color: 'rgba(255,255,255,0.035)',
            whiteSpace: 'nowrap',
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            userSelect: 'none',
          }}
        >
          Sky Automations
        </span>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <CloudIcon />
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  color: '#F0F4FF',
                  fontSize: 16,
                }}
              >
                Sky Automations
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#6B7280', maxWidth: 220, fontFamily: 'var(--font-dm-sans)' }}
            >
              AI-powered digital infrastructure for home service businesses.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[1.5px] uppercase mb-4"
              style={{ color: 'rgba(240,244,255,0.4)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A9FFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[1.5px] uppercase mb-4"
              style={{ color: 'rgba(240,244,255,0.4)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A9FFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[1.5px] uppercase mb-4"
              style={{ color: 'rgba(240,244,255,0.4)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A9FFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: '#6B7280',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          <span>© 2025 Sky Automations LLC. All rights reserved.</span>
          <span>Built for the trades. Powered by AI.</span>
        </div>
      </div>
    </footer>
  )
}
