'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, PhoneMissed, Search, Star, Megaphone, ChevronDown } from 'lucide-react'

const productItems = [
  {
    label: 'Functional Website',
    desc: 'A lead-generating website built for your trade',
    href: '/products/website',
    icon: Monitor,
  },
  {
    label: 'Missed Call Text-Back',
    desc: 'Never lose a lead to a missed call again',
    href: '/products/missed-call',
    icon: PhoneMissed,
  },
  {
    label: 'Local SEO',
    desc: 'Get found on Google by local customers',
    href: '/products/local-seo',
    icon: Search,
  },
  {
    label: '5-Star Review Funnel',
    desc: 'Build your reputation on autopilot',
    href: '/products/reviews',
    icon: Star,
  },
  {
    label: 'One-Click Marketing Campaigns',
    desc: 'Re-engage past customers instantly',
    href: '/products/campaigns',
    icon: Megaphone,
  },
]

const navLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'The Process', href: '/our-work' },
  { label: 'About', href: '/about' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const accountPanelRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!accountOpen) return
    const onDown = (e: MouseEvent) => {
      const el = e.target as Element
      if (el.closest('[data-account-trigger]') || accountPanelRef.current?.contains(el as Node)) return
      setAccountOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAccountOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [accountOpen])

  useEffect(() => {
    if (!productsOpen) return
    const onDown = (e: MouseEvent) => {
      if (productsRef.current?.contains(e.target as Node)) return
      setProductsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [productsOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        }}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0">
              <Image
                src="/Mascots/mascot-home.png"
                alt="Sky Automations mascot"
                width={36}
                height={36}
                className="object-contain"
              />
              <span
                className="font-syne font-700 text-[17px] tracking-tight"
                style={{ color: '#0A0F1E', fontWeight: 700 }}
              >
                Sky Automations
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {/* Products dropdown */}
              <div ref={productsRef} className="relative">
                <button
                  type="button"
                  onClick={() => setProductsOpen((o) => !o)}
                  className="flex items-center gap-1 text-sm font-dmSans font-medium transition-colors duration-150"
                  style={{ color: '#0A0F1E', opacity: productsOpen ? 1 : 0.75 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => { if (!productsOpen) e.currentTarget.style.opacity = '0.75' }}
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    size={14}
                    style={{ transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-50 w-72 rounded-2xl py-3 px-2 shadow-[0_16px_48px_rgba(0,0,0,0.16)]"
                      style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)' }}
                    >
                      {productItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-[#F0F4FF] group"
                        >
                          <div
                            className="shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: 'rgba(74,159,255,0.1)' }}
                          >
                            <item.icon size={15} color="#4A9FFF" strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0">
                            <p
                              className="font-dmSans font-semibold text-sm text-[#0A0F1E] leading-snug"
                            >
                              {item.label}
                            </p>
                            <p
                              className="text-xs mt-0.5 leading-snug"
                              style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-dmSans font-medium transition-colors duration-150"
                  style={{ color: scrolled ? '#0A0F1E' : '#0A0F1E', opacity: 0.75 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                data-account-trigger
                className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-150"
                style={{
                  color: '#4A9FFF',
                  border: '1.5px solid rgba(74,159,255,0.35)',
                  background: '#ffffff',
                }}
                aria-expanded={accountOpen}
                aria-haspopup="dialog"
                onClick={() => setAccountOpen((o) => !o)}
              >
                Log In
              </button>
              <Link
                href="#book-call"
                className="text-sm font-medium px-5 py-2.5 rounded-full text-white transition-all duration-200"
                style={{ background: '#4A9FFF' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#1A6BFF'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#4A9FFF'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                Book A Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                initial={false}
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                className="w-6 h-0.5 bg-[#0A0F1E] block origin-center"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                initial={false}
                animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-[#0A0F1E] block"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                initial={false}
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                className="w-6 h-0.5 bg-[#0A0F1E] block origin-center"
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: '#070B14' }}
          >
            <div className="flex items-center justify-between h-16 px-4">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/Mascots/mascot-home.png"
                  alt="Sky Automations mascot"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-syne font-bold text-white text-lg">Sky Automations</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center justify-center flex-1 gap-8 overflow-y-auto py-8 w-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {/* Products section in mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full px-6"
              >
                <p className="font-syne font-bold text-3xl text-white text-center mb-4">Products</p>
                <div className="flex flex-col gap-2">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <item.icon size={16} color="#4A9FFF" strokeWidth={1.75} />
                      <span
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="font-syne font-bold text-3xl text-white hover:text-blue-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-3 mt-8 w-64"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  type="button"
                  data-account-trigger
                  className="w-full text-center py-4 rounded-full font-medium transition-all"
                  style={{
                    color: '#4A9FFF',
                    border: '1.5px solid rgba(74,159,255,0.4)',
                    background: 'transparent',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                  onClick={() => {
                    setMobileOpen(false)
                    setAccountOpen(true)
                  }}
                >
                  Log In
                </button>
                <Link
                  href="#book-call"
                  className="w-full text-center py-4 rounded-full font-medium text-white transition-all"
                  style={{ background: '#4A9FFF', fontFamily: 'var(--font-dm-sans)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book A Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {accountOpen && (
          <motion.div
            ref={accountPanelRef}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed left-1/2 top-[4.5rem] z-[60] w-[min(calc(100vw-2rem),280px)] -translate-x-1/2 rounded-xl px-5 py-5 text-center shadow-[0_16px_48px_rgba(0,0,0,0.35)] md:left-auto md:right-4 md:translate-x-0"
            style={{
              background: '#141820',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            role="dialog"
            aria-label="Account"
          >
            <div className="mx-auto flex w-full flex-col items-center gap-3 text-center">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ background: '#4A9FFF' }}
              >
                K
              </div>
              <div className="w-full space-y-0.5">
                <p className="font-medium text-white" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  Kohli Zone
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  thekohlizone@gmail.com
                </p>
              </div>
              <div className="h-px w-full bg-white/10" />
              <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                2 more accounts
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
