'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Where each bubble sits as % of viewport height inside the sticky window
const STEP_VH = [15, 47, 79]

// Rocket: top anchor = 3vh, y animates 0→80vh (screen pos 3→83vh).
// Bubble 3 is at 79vh → rocket aligns at y=76vh → F2 = 76/80 = 0.95
// Section ends almost immediately after step 3 unlocks.
const ROCKET_MAX_VH = 80
const F0 = (STEP_VH[0] - 3) / ROCKET_MAX_VH  // ~0.150
const F1 = (STEP_VH[1] - 3) / ROCKET_MAX_VH  // ~0.550
const F2 = (STEP_VH[2] - 3) / ROCKET_MAX_VH  // ~0.950
const THRESHOLDS = [F0, F1, F2]

const stepData = [
  {
    number: '1',
    title: 'Book A Free Call',
    time: '~20 min',
    desc: "20 minutes. We answer every question, walk through what's included, and make sure it's a good fit. No pressure.",
    href: '/#book-call',
    btnLabel: 'Book A Free Call',
    btnPrimary: true,
  },
  {
    number: '2',
    title: 'We Build Everything',
    time: '7–10 days',
    desc: 'Fill out a short form with your business details. We handle the website, automations, SEO — all of it.',
    href: '/#features',
    btnLabel: 'See What We Build',
    btnPrimary: false,
  },
  {
    number: '3',
    title: 'Launch and Start Getting Calls',
    time: '~25 min',
    desc: 'We walk you through your new system in 25 minutes. Then it runs on autopilot. Your only job is answering the phone.',
    href: null,
    btnLabel: null,
    btnPrimary: false,
  },
]

export default function OurWorkPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Rocket moves bidirectionally with scroll (always tracks position)
  const rocketY = useTransform(scrollYProgress, [0, 1], ['0vh', `${ROCKET_MAX_VH}vh`])

  // One-way latch: once a step is unlocked it stays unlocked even on scroll back
  const [unlocked, setUnlocked] = useState([false, false, false])

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setUnlocked((prev) => {
        const next = prev.map((was, i) => was || v >= THRESHOLDS[i]) as [boolean, boolean, boolean]
        // Only trigger re-render if something actually changed
        return next.some((n, i) => n !== prev[i]) ? next : prev
      })
    })
    return unsub
  }, [scrollYProgress])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?auto=format&fit=crop&w=1920&q=80"
            alt="Cloudy sky background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(240,244,255,0.75) 60%, #F0F4FF 100%)',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 py-20">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-syne"
            style={{
              fontSize: 'clamp(52px, 8vw, 108px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#0A0F1E',
              lineHeight: 1.04,
            }}
          >
            The <span style={{ color: '#4A9FFF' }}>Process</span>
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-lg mx-auto mt-5"
            style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
          >
            From first call to fully live — scroll to see exactly how we get your business running on autopilot.
          </motion.p>
        </div>
      </section>

      {/* ── SCROLL-DRIVEN PROCESS ── */}
      {/* Tall outer section creates the scroll distance */}
      <section
        ref={sectionRef}
        className="bg-[#F0F4FF]"
        style={{ height: '310vh' }}
      >
        {/* Sticky inner — stays in viewport while parent scrolls.
            overflow:clip clips visually without creating a scroll container,
            so position:sticky still works. */}
        <div className="sticky top-0 h-screen" style={{ overflow: 'clip' }}>
          <div className="relative h-full max-w-[42rem] mx-auto px-6 sm:px-8">

            {/* ── Full-height dashed line ── */}
            <div
              className="absolute inset-y-0 pointer-events-none"
              style={{
                left: '3.5rem',
                borderLeft: '3px dashed rgba(74,159,255,0.3)',
              }}
              aria-hidden
            />

            {/* ── Scroll-driven rocket ── starts at 3vh so it's not clipped */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                y: rocketY,
                left: 'calc(3.5rem - 17px)',
                top: '3vh',
                zIndex: 20,
              }}
            >
              <Rocket
                size={34}
                color="#4A9FFF"
                strokeWidth={1.5}
                style={{
                  transform: 'rotate(135deg)',
                  filter: 'drop-shadow(0 0 10px rgba(74,159,255,0.65))',
                }}
              />
            </motion.div>

            {/* ── Steps ── */}
            {stepData.map((step, i) => (
              <div key={i}>

                {/* Bubble — sits ON the line, centered at STEP_VH[i].
                    animate fires a one-shot keyframe sequence when unlocked. */}
                <div
                  className="absolute"
                  style={{
                    left: '1rem',
                    top: `${STEP_VH[i]}vh`,
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                  }}
                >
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center rounded-full font-syne font-extrabold text-2xl"
                    animate={unlocked[i] ? {
                      scale: [1, 1.4, 1.12, 1],
                      boxShadow: [
                        '0 0 0px rgba(74,159,255,0)',
                        '0 0 32px rgba(74,159,255,0.75)',
                        '0 0 16px rgba(74,159,255,0.35)',
                        '0 0 8px rgba(74,159,255,0.18)',
                      ],
                    } : {}}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    style={{
                      background: '#ffffff',
                      border: '3px solid #4A9FFF',
                      color: '#4A9FFF',
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Outer div: plain CSS centering. Inner motion.div: one-way fade in. */}
                <div
                  className="absolute"
                  style={{
                    left: 'calc(6rem + 2rem)',
                    top: `${STEP_VH[i]}vh`,
                    transform: 'translateY(-38%)',
                    maxWidth: 'min(30rem, calc(100vw - 9rem))',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={unlocked[i] ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[1.5px] uppercase mb-4"
                      style={{
                        background: 'rgba(74,159,255,0.10)',
                        color: '#4A9FFF',
                        border: '1px solid rgba(74,159,255,0.20)',
                      }}
                    >
                      {step.time}
                    </span>
                    <h3
                      className="font-syne font-extrabold mb-3 leading-[1.08]"
                      style={{
                        fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                        color: '#0A0F1E',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{
                        color: '#6B7280',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 300,
                      }}
                    >
                      {step.desc}
                    </p>
                    {step.href && (
                      <Link
                        href={step.href}
                        className={`${step.btnPrimary ? 'btn-primary' : 'btn-ghost'} text-sm mt-5 inline-flex`}
                      >
                        {step.btnLabel}
                      </Link>
                    )}
                  </motion.div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
