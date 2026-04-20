import Link from 'next/link'
import Image from 'next/image'

const productLinks = [
  { label: "What's Included", href: '/pricing' },
  { label: 'Functional Website', href: '/products/website' },
  { label: 'Missed Call Text-Back', href: '/products/missed-call' },
  { label: 'Local SEO', href: '/products/local-seo' },
  { label: '5-Star Review Funnel', href: '/products/reviews' },
  { label: 'One-Click Marketing Campaigns', href: '/products/campaigns' },
]

const companyLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'The Process', href: '/our-work' },
]

const ourWorkLinks = [
  { label: 'About', href: '/about' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
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
        <div className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/Mascots/mascot-home.png"
                alt="Sky Automations mascot"
                width={32}
                height={32}
                className="object-contain"
              />
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

          {/* Col 4: Our Work */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[1.5px] uppercase mb-4"
              style={{ color: 'rgba(240,244,255,0.4)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Our Work
            </h4>
            <ul className="flex flex-col gap-3">
              {ourWorkLinks.map((link) => (
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

          {/* Col 5: Legal */}
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
