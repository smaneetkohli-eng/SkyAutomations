'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { InViewMotion } from '@/components/InViewMotion'

const expandedFeatures = [
  {
    title: 'Professional Website (10–20 pages)',
    value: '$500/mo value',
    desc: 'A clean, fast, mobile-first website built specifically for your trade. Every button is set up to send text messages directly to your phone — no email delays, no missed opportunities.',
  },
  {
    title: 'AI Missed Call Text-Back',
    value: '$297/mo value',
    desc: 'When you miss a call, our AI automatically sends a text to that number within seconds. It keeps the conversation alive so you can respond when you get off the job.',
  },
  {
    title: 'Automated Lead Follow-Up',
    value: '$197/mo value',
    desc: 'Every form fill on your website triggers an instant, personalized text reply in your name. You look responsive and professional without lifting a finger.',
  },
  {
    title: '5-Star Review Funnel',
    value: '$199/mo value',
    desc: 'After a job, customers automatically get a follow-up asking for a review. Happy customers are guided to Google. Unhappy ones are handled privately — protecting your reputation.',
  },
  {
    title: 'Local SEO + Google Profile Optimization',
    value: '$500/mo value',
    desc: 'We optimize your website and Google Business Profile so your business ranks when people in your area search for your service. Real organic traffic, no ad spend.',
  },
  {
    title: 'Website Chat to Text Setup',
    value: '$97/mo value',
    desc: 'A chat widget on your website that converts conversations to text messages on your phone. Customers feel heard. You respond at your own pace.',
  },
  {
    title: 'One-Click Marketing Campaigns',
    value: '$247/mo value',
    desc: 'Pre-built referral and repeat customer campaigns you can activate with a single click. Built to generate more work from your existing happy customers.',
  },
]


export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const monthlyPrice = 297
  const annualPrice = 237

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
            alt="Sky background"
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
            className="font-syne mb-5"
            style={{
              fontSize: 'clamp(52px, 8vw, 108px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#0A0F1E',
              lineHeight: 1.04,
            }}
          >
            Simple Pricing.<br />
            <span style={{ color: '#4A9FFF' }}>No Surprises.</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
          >
            One flat monthly rate covers your website, AI tools, automations, and SEO.
            Everything your business needs to grow online.
          </motion.p>
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="py-20" style={{ background: '#F0F4FF' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Toggle */}
          <InViewMotion className="flex items-center justify-center gap-4 mb-12">
            <span
              className="text-sm font-medium"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: !isAnnual ? '#0A0F1E' : '#6B7280',
              }}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300"
              style={{ background: isAnnual ? '#4A9FFF' : 'rgba(0,0,0,0.12)' }}
              aria-label="Toggle billing period"
            >
              <motion.span
                className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md"
                animate={{ left: isAnnual ? 'calc(100% - 28px)' : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ display: 'block' }}
              />
            </button>

            <span
              className="flex items-center gap-2 text-sm font-medium"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                color: isAnnual ? '#0A0F1E' : '#6B7280',
              }}
            >
              Annual
              <AnimatePresence>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -4 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(0,214,143,0.12)',
                      color: '#00D68F',
                      border: '1px solid rgba(0,214,143,0.3)',
                    }}
                  >
                    Save 20%
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </InViewMotion>

          {/* Card */}
          <InViewMotion
            from={{ opacity: 0, y: 36 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.55}
            className="bg-white rounded-2xl p-8 sm:p-10"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              borderTop: '2px solid #4A9FFF',
              boxShadow: '0 8px 48px rgba(74,159,255,0.12)',
            }}
          >
            <div className="mb-6">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(74,159,255,0.1)',
                  color: '#4A9FFF',
                  border: '1px solid rgba(74,159,255,0.2)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                Most Popular
              </span>
            </div>

            {/* Strikethrough retail value */}
            <p
              className="text-sm mb-1"
              style={{ color: '#9CA3AF', fontFamily: 'var(--font-dm-sans)' }}
            >
              <span style={{ textDecoration: 'line-through' }}>$2,037/mo</span>
              <span className="ml-1.5">if purchased separately</span>
            </p>

            {/* Price with AnimatePresence */}
            <div className="flex items-end gap-1 mb-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isAnnual ? 'annual' : 'monthly'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="font-syne"
                  style={{ fontSize: 80, fontWeight: 800, color: '#0A0F1E', lineHeight: 1 }}
                >
                  ${isAnnual ? annualPrice : monthlyPrice}
                </motion.span>
              </AnimatePresence>
              <span
                className="pb-3 text-xl"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
              >
                /mo
              </span>
            </div>

            {isAnnual && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm mb-2"
                style={{ color: '#00D68F', fontFamily: 'var(--font-dm-sans)' }}
              >
                Billed annually — you save $720/year
              </motion.p>
            )}

            <p
              className="text-sm mb-8"
              style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
            >
              No setup fee · No contract · Cancel any time
            </p>

            <div
              className="mb-8"
              style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
            />

            {/* Expanded features */}
            <ul className="flex flex-col gap-5 mb-10">
              {expandedFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(74,159,255,0.08)' }}
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-[#4A9FFF]" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: '#0A0F1E', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {feature.title}
                      </p>
                      <span
                        className="shrink-0 text-xs font-medium whitespace-nowrap"
                        style={{ color: '#9CA3AF', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {feature.value}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: '#6B7280',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 300,
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#book-call"
              className="w-full btn-primary justify-center text-base"
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
      </section>

      <Footer />
    </>
  )
}
