'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
        style={{ background: '#F0F4FF' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(74,159,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 py-24">
          <motion.span
            className="section-label"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Coming Soon
          </motion.span>

          <motion.h1
            className="font-syne"
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#0A0F1E',
              lineHeight: 1.05,
            }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            About
          </motion.h1>

          <motion.p
            className="text-lg max-w-md"
            style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're putting this together now. Check back soon — it's going to be worth the wait.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <Link href="#book-call" className="btn-primary text-base mt-2">
              Book A Free Call In The Meantime
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
