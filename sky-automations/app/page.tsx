'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MascotFloat, { MASCOT_HOME } from '@/components/MascotFloat'
import { InViewMotion } from '@/components/InViewMotion'
import FeatureDetailSections from '@/components/FeatureDetailSections'

// ─── Animation helpers ───────────────────────────────────────────────────────

const customEase = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ─── Steps data ───────────────────────────────────────────────────────────────

const steps = [
  {
    number: '1',
    title: 'Book A Free Call',
    time: '~20 min',
    desc: "20 minutes. We answer every question, walk through what's included, and make sure it's a good fit. No pressure.",
  },
  {
    number: '2',
    title: 'We Build Everything',
    time: '7–10 days',
    desc: 'Fill out a short form with your business details. We handle the website, automations, SEO — all of it.',
  },
  {
    number: '3',
    title: 'Launch and Start Getting Calls',
    time: '~25 min',
    desc: 'We walk you through your new system in 25 minutes. Then it runs on autopilot. Your only job is answering the phone.',
  },
]

// ─── Trades we serve (18 total — 6 per carousel page, 3 pages) ───────────────

const tradeShowcase: { label: string; image: string }[] = [
  // Page 1
  { label: 'Plumbers',           image: '/trades/plumbers.png' },
  { label: 'Roofers',            image: '/trades/roofers.png' },
  { label: 'HVAC',               image: '/trades/hvac.png' },
  { label: 'House Cleaners',     image: '/trades/house-cleaners.png' },
  { label: 'Landscapers',        image: '/trades/landscapers.png' },
  { label: 'Painters',           image: '/trades/painters.png' },
  // Page 2
  { label: 'Electricians',       image: '/trades/electricians.png' },
  { label: 'Handyman',           image: '/trades/handyman.png' },
  { label: 'Decks & Patios',     image: '/trades/decks-patios.png' },
  { label: 'Hardscaping',        image: '/trades/hardscaping.png' },
  { label: 'Paving',             image: '/trades/paving.png' },
  { label: 'Tree Service',       image: '/trades/tree-service.png' },
  // Page 3
  { label: 'Windows & Doors',    image: '/trades/windows-doors.png' },
  { label: 'Moving Companies',   image: '/trades/moving-companies.png' },
  { label: 'General Contractors',image: '/trades/general-contractors.png' },
  { label: 'Pest Control',       image: '/trades/pest-control.png' },
  { label: 'Flooring & Tile',    image: '/trades/flooring.png' },
  { label: 'Interior Decorators',image: '/trades/interior-decorators.png' },
]

const TRADES_PER_PAGE = 6
const TRADE_TOTAL_PAGES = Math.ceil(tradeShowcase.length / TRADES_PER_PAGE)

// ─── Checklist items ──────────────────────────────────────────────────────────

const checklistItems = [
  'Professional website (10–20 pages)',
  'AI missed call text-back',
  'Automated lead follow-up',
  '5-star review funnel',
  'Local SEO + Google profile optimization',
  'Website chat to text setup',
  'One-click marketing campaigns',
]

// ─── Homepage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [tradePage, setTradePage] = useState(0)

  return (
    <>
      <Navbar />

      {/* ── HERO — title + two frosted cards (mascot | copy + CTAs) ───────── */}
      <section
        id="hero"
        className="relative z-10 flex min-h-0 flex-col overflow-x-hidden overflow-y-visible bg-white pt-16 pb-6 sm:pb-8 md:pb-9"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.52) 45%, rgba(240,244,255,0.78) 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(74,159,255,0.22) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Linear fade: photo to white (no curve) */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(32vh,280px)]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 42%, #ffffff 96%)',
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-5">
          {/* Title + subtitle */}
          <div className="mx-auto w-full min-w-0 max-w-[min(100%,92rem)] shrink-0 px-3 text-center sm:px-4 md:px-5">
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: customEase }}
              className="font-syne font-extrabold text-[#0A0F1E] w-full min-w-0 max-w-full break-words [font-size:clamp(1.875rem,1rem+8vw,10.5rem)]"
              style={{
                letterSpacing: '-0.042em',
                lineHeight: 0.94,
                fontWeight: 800,
              }}
            >
              Sky{' '}
              <span className="text-[#4A9FFF]">Automations</span>
            </motion.h1>
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: customEase }}
              className="mt-3 font-dmSans text-xs font-medium uppercase tracking-[0.18em] text-[#5c6578] sm:mt-4 sm:text-sm md:text-base"
            >
              More calls. More jobs. Less chaos.
            </motion.p>
          </div>

          {/* Mascot + card */}
          <div className="mx-auto flex w-full max-w-7xl flex-col pt-10 pb-1 sm:pt-12 sm:pb-2 md:pt-14 md:pb-2 lg:pt-16">
            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: customEase }}
                className="flex items-center justify-center px-2 py-1 md:px-4 md:py-2"
              >
                <MascotFloat
                  src={MASCOT_HOME}
                  size={440}
                  float
                  unboxed
                  className="max-w-[min(92vw,440px)] md:max-w-[min(46vw,480px)] w-full drop-shadow-[0_16px_48px_rgba(10,15,30,0.14)]"
                />
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: customEase }}
                className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/75 px-7 py-6 text-left shadow-[0_16px_56px_rgba(10,15,30,0.1)] backdrop-blur-md sm:px-9 sm:py-7 lg:px-10 lg:py-9"
              >
                <p
                  className="font-syne font-extrabold text-[#0A0F1E] leading-[1.1]"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.8vw + 0.65rem, 2.35rem)',
                    letterSpacing: '-0.022em',
                    fontWeight: 800,
                  }}
                >
                  Your business, online, and running{' '}
                  <span className="text-[#4A9FFF]">on autopilot.</span>
                </p>
                <p
                  className="font-dmSans text-[15px] sm:text-base lg:text-lg leading-relaxed"
                  style={{ color: '#5c6578', fontWeight: 300 }}
                >
                  We build your website, set up AI tools, and make your phone ring with new
                  customers — so you can focus on the work you&apos;re good at. No tech skills
                  needed.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 pt-0.5">
                  <Link href="#book-call" className="btn-primary text-base sm:text-lg px-9 py-4 sm:px-10 sm:py-4">
                    Book A Free Call
                  </Link>
                  <Link href="#features" className="btn-ghost text-base sm:text-lg px-9 py-4 sm:px-10 sm:py-4">
                    See What&apos;s Included
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Trust row — spaced from card above, air above bottom of hero */}
          <p
            className="mx-auto mt-8 max-w-7xl shrink-0 text-center text-sm font-medium text-slate-600 sm:mt-10 sm:text-[15px] md:mt-12"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5">
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                  aria-hidden
                />
                No Setup Fees
              </span>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                  aria-hidden
                />
                No Contracts
              </span>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                  aria-hidden
                />
                Live in 7–10 Days
              </span>
            </span>
          </p>
        </div>
      </section>

      {/* ── FEATURES (Format Inspo: one phone per row, alternating) ─ */}
      <section id="features" className="relative z-0 scroll-mt-20 -mt-px">
        <div className="relative flex min-h-[460px] flex-col overflow-x-clip md:min-h-[min(580px,72vh)]" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #F0F4FF 100%)' }}>
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 lg:px-8 lg:pb-8 lg:pt-12">
            <InViewMotion
              className="flex w-full flex-col items-center justify-center text-center"
              from={{ opacity: 0, y: 28 }}
              to={{ opacity: 1, y: 0 }}
              duration={0.55}
            >
              <h2 className="font-syne mx-auto mb-5 w-full text-center sm:mb-6">
                <span
                  className="block text-[#0A0F1E]"
                  style={{
                    fontSize: 'clamp(2rem, 4.2vw + 0.55rem, 3.65rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.08,
                  }}
                >
                  Systems that work,
                </span>
                <span
                  className="block text-[#4A9FFF]"
                  style={{
                    fontSize: 'clamp(2.45rem, 5.2vw + 0.55rem, 4.55rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.08,
                  }}
                >
                  just as hard as you do.
                </span>
              </h2>
              <p
                className="mx-auto w-full max-w-2xl text-center text-xl leading-relaxed text-slate-600 sm:text-2xl"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400 }}
              >
                Take a look at what&apos;s working for businesses just like yours.
              </p>
              <a
                href="#feature-website"
                className="group mt-8 inline-flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A9FFF]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full"
                aria-label="Scroll to features"
              >
                <motion.span
                  className="text-[#4A9FFF] transition-colors duration-300 group-hover:text-[#2E8CFF]"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2.75,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                >
                  <svg
                    width="27"
                    height="40"
                    viewBox="0 0 22 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                    aria-hidden
                  >
                    <path
                      d="M11 4v14"
                      stroke="currentColor"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <path
                      d="M6.5 19.5L11 25l4.5-5.5"
                      stroke="currentColor"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="1"
                    />
                  </svg>
                </motion.span>
              </a>
            </InViewMotion>
          </div>
        </div>

      </section>

      {/* ── FEATURE DETAIL SECTIONS (5 alternating device + content rows) ───── */}
      <FeatureDetailSections />

      {/* ── TRADES WE SERVE — gradient caps + solid centered band ───────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none h-14 sm:h-16 lg:h-20 w-full shrink-0"
          style={{
            background: 'linear-gradient(to bottom, #F0F4FF 0%, #f8faff 55%, #ffffff 100%)',
          }}
        />
        <div className="relative flex min-h-0 flex-col justify-center bg-white overflow-hidden py-12 sm:py-14 lg:py-16 xl:py-20">
          {/* Blurred blue orb — only over solid white band */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div
              style={{
                width: '70%',
                maxWidth: 700,
                aspectRatio: '1',
                background: [
                  'radial-gradient(ellipse 55% 38% at 50% 50%, rgba(74,159,255,0.28) 0%, transparent 70%)',
                  'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,159,255,0.12) 0%, transparent 75%)',
                ].join(', '),
                filter: 'blur(48px)',
                maskImage: [
                  'repeating-linear-gradient(to bottom, transparent 0px, transparent 5px, black 5px, black 13px)',
                  'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 72%)',
                ].join(', '),
                WebkitMaskImage: [
                  'repeating-linear-gradient(to bottom, transparent 0px, transparent 5px, black 5px, black 13px)',
                  'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 72%)',
                ].join(', '),
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <InViewMotion className="text-center mb-8 lg:mb-10">
              <h2
                className="font-syne font-extrabold text-[#0A0F1E] mb-3"
                style={{
                  fontSize: 'clamp(2.85rem, 6.8vw, 4.65rem)',
                  letterSpacing: '-0.035em',
                  fontWeight: 800,
                  lineHeight: 1.05,
                }}
              >
                Trades we help
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg font-medium"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
              >
                Helping home service businesses across Texas get found online
              </p>
            </InViewMotion>

            {/* Carousel wrapper — px reserves space for the nav arrows */}
            <div className="relative px-12 sm:px-14 lg:px-16">
            {/* Left arrow */}
            <button
              onClick={() => setTradePage(p => Math.max(0, p - 1))}
              disabled={tradePage === 0}
              aria-label="Previous trades"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A9FFF]/40"
              style={{
                background: tradePage === 0 ? 'rgba(255,255,255,0.4)' : '#fff',
                boxShadow: '0 4px 20px rgba(74,159,255,0.18)',
                border: '1px solid rgba(74,159,255,0.18)',
                color: tradePage === 0 ? 'rgba(74,159,255,0.3)' : '#4A9FFF',
                cursor: tradePage === 0 ? 'default' : 'pointer',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Sliding track */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${tradePage * 100}%)`,
                  transition: 'transform 0.48s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {Array.from({ length: TRADE_TOTAL_PAGES }).map((_, pageIdx) => (
                  <div
                    key={pageIdx}
                    className="min-w-full grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-6"
                  >
                    {tradeShowcase.slice(pageIdx * TRADES_PER_PAGE, (pageIdx + 1) * TRADES_PER_PAGE).map((trade) => (
                      <div
                        key={trade.label}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(74,159,255,0.12)] border border-black/[0.06]"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e8edf5]">
                          <Image
                            src={trade.image}
                            alt={trade.label}
                            fill
                            sizes="(max-width: 640px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-[#0A0F1E]/10 to-transparent"
                            aria-hidden
                          />
                        </div>
                        <div className="bg-white px-4 py-3">
                          <p
                            className="font-syne font-bold text-[#0A0F1E] text-base leading-tight"
                            style={{ letterSpacing: '-0.02em' }}
                          >
                            {trade.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setTradePage(p => Math.min(TRADE_TOTAL_PAGES - 1, p + 1))}
              disabled={tradePage === TRADE_TOTAL_PAGES - 1}
              aria-label="Next trades"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A9FFF]/40"
              style={{
                background: tradePage === TRADE_TOTAL_PAGES - 1 ? 'rgba(255,255,255,0.4)' : '#fff',
                boxShadow: '0 4px 20px rgba(74,159,255,0.18)',
                border: '1px solid rgba(74,159,255,0.18)',
                color: tradePage === TRADE_TOTAL_PAGES - 1 ? 'rgba(74,159,255,0.3)' : '#4A9FFF',
                cursor: tradePage === TRADE_TOTAL_PAGES - 1 ? 'default' : 'pointer',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Page dots */}
            <div className="flex items-center justify-center gap-2 mt-6 pb-2">
              {Array.from({ length: TRADE_TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTradePage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className="transition-all duration-300 rounded-full focus:outline-none"
                  style={{
                    width: tradePage === i ? 24 : 8,
                    height: 8,
                    background: tradePage === i ? '#4A9FFF' : 'rgba(74,159,255,0.25)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none h-[4.5rem] sm:h-24 md:h-28 lg:h-36 xl:h-40 w-full shrink-0"
          style={{
            background: `linear-gradient(
              to bottom,
              #ffffff 0%,
              #fcfdff 10%,
              #f8faff 22%,
              #f4f7fd 38%,
              #f0f4fc 54%,
              #edf2fb 68%,
              #eef3fc 82%,
              #eff4fc 92%,
              #F0F4FF 100%
            )`,
          }}
        />
      </section>

      {/* ── SECTION 6: HOW IT WORKS — solid band; top fade comes from trades above ─ */}
      <section id="how-it-works" className="relative overflow-hidden">
        <div className="flex min-h-0 flex-col justify-center bg-[#F0F4FF] overflow-hidden py-12 sm:py-14 lg:py-20 xl:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <InViewMotion className="text-center mb-10 lg:mb-14 xl:mb-16">
            <h2
              className="font-syne"
              style={{
                fontSize: 'clamp(34px, 5vw, 56px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0A0F1E',
              }}
            >
              The Process
            </h2>
          </InViewMotion>

          {/* Desktop: 5-col grid so copy shares a column with each bubble (centered) */}
          <div
            className="hidden lg:grid w-full items-start gap-x-1 xl:gap-x-3 gap-y-10 xl:gap-y-14"
            style={{
              gridTemplateColumns: 'auto minmax(2rem, 1fr) auto minmax(2rem, 1fr) auto',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={`bubble-${i}`}
                className="flex justify-center justify-self-center"
                style={{ gridColumn: i === 0 ? 1 : i === 1 ? 3 : 5, gridRow: 1 }}
              >
                <div
                  className="w-[4.25rem] h-[4.25rem] xl:w-20 xl:h-20 rounded-full flex items-center justify-center font-syne font-bold text-xl xl:text-2xl"
                  style={{
                    background: 'rgba(74,159,255,0.1)',
                    border: '2px solid rgba(74,159,255,0.35)',
                    color: '#4A9FFF',
                  }}
                >
                  {step.number}
                </div>
              </div>
            ))}
            <div
              className="flex h-[4.25rem] xl:h-20 w-full min-w-[1.5rem] xl:min-w-[2.5rem] items-center px-0"
              style={{ gridColumn: 2, gridRow: 1 }}
              aria-hidden
            >
              <div
                className="w-full h-0 border-t-[3px] border-dashed"
                style={{ borderColor: 'rgba(74,159,255,0.45)' }}
              />
            </div>
            <div
              className="flex h-[4.25rem] xl:h-20 w-full min-w-[1.5rem] xl:min-w-[2.5rem] items-center px-0"
              style={{ gridColumn: 4, gridRow: 1 }}
              aria-hidden
            >
              <div
                className="w-full h-0 border-t-[3px] border-dashed"
                style={{ borderColor: 'rgba(74,159,255,0.45)' }}
              />
            </div>
            {steps.map((step, i) => (
              <InViewMotion
                key={i}
                from={{ opacity: 0, y: 36 }}
                to={{ opacity: 1, y: 0 }}
                delay={i * 0.12}
                duration={0.5}
                className="text-center justify-self-center w-full max-w-[300px]"
                style={{ gridColumn: i === 0 ? 1 : i === 1 ? 3 : 5, gridRow: 2 }}
              >
                <h3
                  className="font-syne font-bold text-xl xl:text-2xl mb-2 leading-snug text-balance"
                  style={{ color: '#0A0F1E', letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm xl:text-base font-semibold mb-3"
                  style={{ color: '#4A9FFF', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {step.time}
                </p>
                <p
                  className="text-base xl:text-[17px] leading-relaxed"
                  style={{
                    color: '#6B7280',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
              </InViewMotion>
            ))}
          </div>

          {/* Mobile: bubble column + vertical dashes that meet each bubble */}
          <div className="lg:hidden flex flex-col max-w-xl mx-auto px-2">
            {steps.map((step, i) => (
              <InViewMotion
                key={i}
                from={{ opacity: 0, y: 36 }}
                to={{ opacity: 1, y: 0 }}
                delay={i * 0.12}
                duration={0.5}
              >
                <div className="flex flex-row items-start gap-5 sm:gap-6">
                  <div className="flex flex-col items-center shrink-0 w-16 sm:w-[4.25rem]">
                    <div
                      className="w-14 h-14 sm:w-[4.25rem] sm:h-[4.25rem] rounded-full flex items-center justify-center font-syne font-bold text-lg sm:text-xl"
                      style={{
                        background: 'rgba(74,159,255,0.1)',
                        border: '2px solid rgba(74,159,255,0.35)',
                        color: '#4A9FFF',
                      }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px grow min-h-[2.25rem] sm:min-h-10 border-l-[3px] border-dashed my-2"
                        style={{ borderColor: 'rgba(74,159,255,0.45)' }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3
                      className="font-syne font-bold text-lg sm:text-xl mb-1.5 leading-snug"
                      style={{ color: '#0A0F1E', letterSpacing: '-0.01em' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: '#4A9FFF', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {step.time}
                    </p>
                    <p
                      className="text-[15px] sm:text-base leading-relaxed"
                      style={{
                        color: '#6B7280',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 300,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </InViewMotion>
            ))}
          </div>
        </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none h-10 sm:h-12 lg:h-14 w-full shrink-0"
          style={{
            background:
              'linear-gradient(to bottom, #F0F4FF 0%, #f5f7fd 35%, #fcfcff 85%, #ffffff 100%)',
          }}
        />
      </section>

      {/* ── SECTION 7: PRICING TEASER (process bottom gradient ends in #fff above) ─ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <InViewMotion className="text-center mb-12">
            <span className="section-label mb-4 inline-block">Simple Pricing</span>
            <h2
              className="font-syne mt-4 mb-4"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0A0F1E',
              }}
            >
              One price. Everything included.
            </h2>
            <p
              className="text-lg max-w-md mx-auto"
              style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
            >
              No setup fees. No hidden costs. Cancel any time — though most businesses
              stay for years.
            </p>
          </InViewMotion>

          <div className="flex flex-col items-center justify-center gap-8">
            {/* Pricing card */}
            <InViewMotion
              from={{ opacity: 0, y: 36 }}
              to={{ opacity: 1, y: 0 }}
              duration={0.55}
              className="w-full max-w-md bg-white rounded-2xl p-8"
              style={{
                border: '1px solid rgba(0,0,0,0.06)',
                borderTop: '2px solid #4A9FFF',
                boxShadow: '0 8px 48px rgba(74,159,255,0.12)',
              }}
            >
              {/* Strikethrough retail value */}
              <p className="mb-4 text-sm" style={{ color: '#9CA3AF', fontFamily: 'var(--font-dm-sans)' }}>
                <span style={{ textDecoration: 'line-through' }}>$2,037/mo</span>
                <span className="ml-1.5">if purchased separately</span>
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="font-syne"
                  style={{ fontSize: 72, fontWeight: 800, color: '#0A0F1E', lineHeight: 1 }}
                >
                  $297
                </span>
                <span
                  className="pb-2 text-xl"
                  style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
                >
                  /mo
                </span>
              </div>
              <p
                className="text-sm mb-6"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
              >
                No setup fee · No contract · Cancel any time
              </p>

              <div
                className="mb-6"
                style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
              />

              {/* Checklist */}
              <ul className="flex flex-col gap-3 mb-8">
                {checklistItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: '#0A0F1E', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    <span
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(0,214,143,0.12)' }}
                      aria-hidden
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3"
                          stroke="#00D68F"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#book-call"
                className="w-full btn-primary justify-center"
                style={{ display: 'flex' }}
              >
                Book A Free Call
              </Link>
              <p
                className="text-xs text-center mt-3"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
              >
                No credit card needed to get started
              </p>
            </InViewMotion>
          </div>

          <InViewMotion className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm font-medium"
              style={{ color: '#4A9FFF', fontFamily: 'var(--font-dm-sans)' }}
            >
              See full pricing details
            </Link>
          </InViewMotion>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: '#070B14' }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(74,159,255,0.18) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center">
            <InViewMotion className="mx-auto text-center md:mx-0 md:text-left">
              <h2
                className="font-syne mb-5"
                style={{
                  fontSize: 'clamp(30px, 4.5vw, 56px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#F0F4FF',
                  lineHeight: 1.1,
                }}
              >
                Ready to stop missing calls<br />
                and start winning jobs?
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
              >
                Book a free 20-minute call. We&apos;ll answer your questions honestly and
                show you exactly what you&apos;d be getting.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="#book-call" className="btn-primary text-base inline-flex">
                  Book Your Free Call
                </Link>
              </div>
            </InViewMotion>

            {/* Footer mascot — md+ only; centered in its 1/3 column */}
            <div
              className="hidden md:flex items-center justify-center self-center pointer-events-none select-none"
              aria-hidden
            >
              <motion.div
                className="inline-flex"
                initial={{ y: 0 }}
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 3.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <Image
                  src="/Mascots/footer-mascot.png"
                  alt=""
                  width={350}
                  height={350}
                  className="w-auto object-contain object-bottom mix-blend-screen h-[clamp(300px,22vw,350px)] max-h-[350px]"
                  sizes="(max-width: 768px) 0px, 350px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
