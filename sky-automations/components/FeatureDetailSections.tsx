'use client'

import type { ReactNode } from 'react'
import { InViewMotion } from '@/components/InViewMotion'

/* ─── Shared: blue-filled circle checkmark ─────────────────────────────────── */

function BulletCheck() {
  return (
    <span
      className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
      style={{ background: '#4A9FFF' }}
      aria-hidden
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 4L3.5 6.5L8.5 1.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/* ─── Shared: single bullet row ─────────────────────────────────────────────── */

function BulletItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3.5">
      <BulletCheck />
      <div>
        <p
          className="font-semibold mb-1"
          style={{ color: '#4A9FFF', fontFamily: 'var(--font-dm-sans)' }}
        >
          {title}
        </p>
        <p
          className="text-sm sm:text-[15px] leading-relaxed"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          {desc}
        </p>
      </div>
    </li>
  )
}

/* ─── Shared: straight phone frame ──────────────────────────────────────────── */

function PhoneFrame({
  children,
  screenClass,
}: {
  children: ReactNode
  screenClass?: string
}) {
  return (
    <div
      style={{
        width: 220,
        height: 477,
        borderRadius: 40,
        background: '#0d1117',
        border: '6px solid #1e2430',
        outline: '2px solid #0a0d14',
        flexShrink: 0,
        position: 'relative',
        filter: 'drop-shadow(0 28px 44px rgba(0,0,0,0.30))',
      }}
    >
      {/* Side buttons */}
      <div style={{ position: 'absolute', left: -8, top: 100, width: 4, height: 36, background: '#1e2430', borderRadius: 4 }} />
      <div style={{ position: 'absolute', left: -8, top: 148, width: 4, height: 36, background: '#1e2430', borderRadius: 4 }} />
      <div style={{ position: 'absolute', right: -8, top: 120, width: 4, height: 56, background: '#1e2430', borderRadius: 4 }} />
      {/* Notch */}
      <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 72, height: 18, background: '#0a0d14', borderRadius: 12, zIndex: 10 }} />
      {/* Screen */}
      <div
        className={screenClass}
        style={{ position: 'absolute', inset: 0, borderRadius: 34, overflow: 'hidden', background: '#fff' }}
      >
        {children}
      </div>
      {/* Glare */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', borderRadius: '34px 34px 0 0', background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 5 }} />
    </div>
  )
}

/* ─── SMS screen (sections 2 & 5) ───────────────────────────────────────────── */

function SmsScreen({
  outgoing,
  incoming,
  screenClass,
}: {
  outgoing: ReactNode
  incoming: ReactNode
  screenClass: string
}) {
  return (
    <PhoneFrame screenClass={screenClass}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
        {/* Status bar */}
        <div style={{ height: 38, background: '#1a1a1a', flexShrink: 0 }} />
        {/* Conversation header */}
        <div style={{ background: '#4A9FFF', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
          <div>
            <div style={{ color: 'white', fontSize: 10, fontWeight: 600, fontFamily: 'sans-serif' }}>Your Business</div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 8, fontFamily: 'sans-serif' }}>Text Message</div>
          </div>
        </div>
        {/* Message bubbles */}
        <div style={{ flex: 1, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
          {/* Outgoing (right) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: '#4A9FFF', color: 'white', padding: '8px 10px', borderRadius: '14px 14px 3px 14px', fontSize: 8.5, maxWidth: '85%', lineHeight: 1.5, fontFamily: 'sans-serif' }}>
              {outgoing}
            </div>
          </div>
          {/* Incoming (left) */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ background: '#e5e5ea', color: '#0A0F1E', padding: '8px 10px', borderRadius: '14px 14px 14px 3px', fontSize: 8.5, maxWidth: '85%', lineHeight: 1.5, fontFamily: 'sans-serif' }}>
              {incoming}
            </div>
          </div>
        </div>
        {/* Input bar */}
        <div style={{ padding: '6px 8px', background: '#f5f5f5', borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <div style={{ flex: 1, height: 26, background: 'white', borderRadius: 13, border: '1px solid #d0d0d0' }} />
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#4A9FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid white', marginLeft: 2 }} />
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── View Demo ghost button ─────────────────────────────────────────────────── */

function ViewDemoBtn() {
  return (
    <a href="#demo" className="btn-ghost inline-flex mt-2">
      View Demo
    </a>
  )
}

/* ─── Section wrapper ────────────────────────────────────────────────────────── */

function FeatureSection({
  id,
  reverse,
  device,
  children,
  variant = 'phone',
}: {
  id: string
  reverse?: boolean
  device: ReactNode
  children: ReactNode
  /** 'phone' = 1/3 device · 2/3 text; 'laptop' = 50/50 */
  variant?: 'phone' | 'laptop'
}) {
  const deviceCol =
    variant === 'laptop'
      ? 'lg:flex-1 flex justify-center w-full'
      : 'lg:w-[38%] lg:shrink-0 flex justify-center w-full'

  const contentCol =
    variant === 'laptop'
      ? 'lg:flex-1 w-full'
      : 'lg:flex-1 w-full'

  return (
    <section
      id={id}
      style={{
        background: '#F0F4FF',
      }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-16 ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Device side */}
          <InViewMotion
            className={deviceCol}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.55}
          >
            {device}
          </InViewMotion>

          {/* Content side */}
          <InViewMotion
            className={contentCol}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
            delay={0.07}
            duration={0.55}
          >
            {children}
          </InViewMotion>
        </div>
      </div>
    </section>
  )
}

/* ─── Laptop mockup (Section 1) ──────────────────────────────────────────────── */

function LaptopMockup() {
  return (
    <div className="laptop-screen-placeholder w-full" style={{ maxWidth: 500 }}>
      {/* Screen panel */}
      <div
        style={{
          width: '100%',
          position: 'relative',
          paddingBottom: '63%',
          borderRadius: '12px 12px 0 0',
          border: '7px solid #2a2f3e',
          borderBottom: 'none',
          overflow: 'hidden',
          boxShadow: '0 -2px 20px rgba(0,0,0,0.15)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #4A9FFF 0%, #1A3A6B 55%, #070B14 100%)',
          }}
        >
          {/* macOS-style title bar */}
          <div style={{ height: 22, background: 'rgba(0,0,0,0.28)', display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px' }}>
            {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
              <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
            ))}
          </div>

          {/* Fake website content */}
          <div style={{ padding: '12px 14px 0' }}>
            {/* Hero card */}
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: '12px 14px', marginBottom: 10 }}>
              <div style={{ width: '55%', height: 8, background: 'rgba(255,255,255,0.65)', borderRadius: 4, marginBottom: 7 }} />
              <div style={{ width: '80%', height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: 3, marginBottom: 4 }} />
              <div style={{ width: '65%', height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: 3, marginBottom: 10 }} />
              <div style={{ width: 82, height: 22, background: '#4A9FFF', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 46, height: 4, background: 'rgba(255,255,255,0.85)', borderRadius: 3 }} />
              </div>
            </div>

            {/* 3-column cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, padding: '9px 8px' }}>
                  <div style={{ width: '65%', height: 4, background: 'rgba(255,255,255,0.35)', borderRadius: 3, marginBottom: 6 }} />
                  <div style={{ width: '88%', height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 3, marginBottom: 3 }} />
                  <div style={{ width: '70%', height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hinge strip */}
      <div style={{ width: '100%', height: 5, background: '#2a2f3e' }} />
      {/* Keyboard base */}
      <div
        style={{
          width: '100%',
          height: 20,
          background: '#1e2330',
          borderRadius: '0 0 6px 6px',
          border: '1px solid #2a2f3e',
          borderTop: 'none',
          boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  )
}

/* ─── Google Review phone screen (Section 3) ─────────────────────────────────── */

function ReviewScreen() {
  return (
    <PhoneFrame screenClass="phone-screen-review">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#ffffff', fontFamily: 'sans-serif' }}>
        {/* Status bar */}
        <div style={{ height: 38, background: '#1a1a1a', flexShrink: 0 }} />

        {/* Content area */}
        <div style={{ flex: 1, padding: '14px 10px', overflow: 'hidden' }}>
          {/* Google review card */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e0e0e0', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '12px 10px' }}>
            {/* Google branding dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
              <div style={{ display: 'flex', gap: 1.5 }}>
                {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((c) => (
                  <div key={c} style={{ width: 5, height: 5, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: '#5f6368', letterSpacing: 0.3 }}>Google Review</div>
            </div>

            {/* Business name */}
            <div style={{ fontSize: 10, fontWeight: 700, color: '#0A0F1E', marginBottom: 6 }}>
              The Glassperts Window Repair
            </div>

            {/* 5 stars */}
            <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Text input */}
            <div style={{ fontSize: 8.5, color: '#9e9e9e', border: '1px solid #e0e0e0', borderRadius: 5, padding: '7px 8px', marginBottom: 10, height: 38 }}>
              Share details of your experience...
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 8.5, color: '#5f6368', padding: '3px 6px' }}>Cancel</div>
              <div style={{ fontSize: 8.5, color: 'white', background: '#4A9FFF', padding: '4px 11px', borderRadius: 5, fontWeight: 600 }}>Post</div>
            </div>
          </div>

          {/* User preview row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#4A9FFF', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 600, color: '#0A0F1E', marginBottom: 3 }}>Muhammad Shaild Jamil</div>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ color: '#F5A623', fontSize: 9 }}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── Google Maps / local SEO phone screen (Section 4) ───────────────────────── */

function SeoScreen() {
  const businesses = [
    { name: 'Supreme Plumbing Co', rating: 4.9, reviews: 128 },
    { name: 'Fast Flow Plumbers', rating: 4.8, reviews: 87 },
    { name: 'City Pro Plumbing', rating: 4.7, reviews: 64 },
  ]

  return (
    <PhoneFrame screenClass="phone-screen-seo">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: 'sans-serif' }}>
        {/* Status bar */}
        <div style={{ height: 38, background: '#1a1a1a', flexShrink: 0 }} />

        {/* Search bar */}
        <div style={{ background: '#fff', padding: '7px 8px 5px', flexShrink: 0, borderBottom: '1px solid #e8eaed' }}>
          <div style={{ background: '#f1f3f4', borderRadius: 20, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#4A9FFF">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <div style={{ fontSize: 9, color: '#5f6368' }}>plumber near me</div>
          </div>
        </div>

        {/* Business listing cards */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {businesses.map((biz, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderBottom: '1px solid #f1f3f4' }}
            >
              <div style={{ width: 34, height: 34, borderRadius: 7, background: '#e8f0fe', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 16, height: 16, borderRadius: 3, background: '#4A9FFF' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#0A0F1E', marginBottom: 2 }}>{biz.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span style={{ fontSize: 9, color: '#F5A623', fontWeight: 700 }}>{biz.rating}</span>
                  <div style={{ display: 'flex', gap: 1 }}>
                    {[1, 2, 3, 4, 5].map((j) => (
                      <span key={j} style={{ color: '#F5A623', fontSize: 8 }}>★</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 8, color: '#70757a' }}>({biz.reviews})</span>
                </div>
                <div style={{ fontSize: 8, color: '#70757a', marginTop: 1 }}>Open · Closes 6PM · 0.8 mi</div>
              </div>
              <div style={{ fontSize: 8.5, color: '#4A9FFF', fontWeight: 600, flexShrink: 0 }}>Call</div>
            </div>
          ))}

          {/* Mini map placeholder */}
          <div
            style={{
              height: 110,
              background: 'linear-gradient(135deg, #dce8fb 0%, #c2d8f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Map pin */}
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#4A9FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(74,159,255,0.4)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'white' }} />
            </div>
            {/* Fake roads */}
            <div style={{ position: 'absolute', top: 14, left: 12, width: 44, height: 3, background: 'rgba(255,255,255,0.55)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', top: 22, left: 12, width: 30, height: 2, background: 'rgba(255,255,255,0.35)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', bottom: 10, right: 60, width: 3, height: 36, background: 'rgba(255,255,255,0.45)', borderRadius: 2 }} />
            {/* Zoom control */}
            <div style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderRadius: 4, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
              <span style={{ fontSize: 12, color: '#4A9FFF', fontWeight: 700, lineHeight: 1 }}>+</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── Main export ────────────────────────────────────────────────────────────── */

export default function FeatureDetailSections() {
  return (
    <>
      {/* ── Section 1: Functional Website — Laptop LEFT ── */}
      <FeatureSection id="feature-website" variant="laptop" device={<LaptopMockup />}>
        <h3
          className="font-syne font-extrabold text-3xl sm:text-4xl mb-3"
          style={{ color: '#0A0F1E', letterSpacing: '-0.025em', lineHeight: 1.1 }}
        >
          Functional Website
        </h3>
        <p
          className="text-base sm:text-lg italic mb-8"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          Get a website that turns visitors into real conversations — sent directly to your phone.
        </p>
        <ul className="flex flex-col gap-6 mb-8">
          <BulletItem
            title="Actually Get Found Online"
            desc="If someone searches for your trade in your city and can't find you, that's a customer you just lost. We make sure that never happens."
          />
          <BulletItem
            title="Show Your Best Reviews"
            desc="Your reputation is everything. We make sure the first thing people see builds trust, not doubt."
          />
          <BulletItem
            title="Works Perfectly on Mobile"
            desc="87% of people will visit your site on their phone. We make sure it looks and works great on every screen."
          />
          <BulletItem
            title="Built for Local Google Searches"
            desc="We set up your site so Google knows exactly who you are, where you are, and what you do."
          />
        </ul>
        <ViewDemoBtn />
      </FeatureSection>

      {/* ── Section 2: AI Missed Call Text-Back — Phone RIGHT ── */}
      <FeatureSection
        id="feature-missed-call"
        reverse
        device={
          <SmsScreen
            screenClass="phone-screen-sms"
            outgoing={
              <>
                Hey! Sorry I missed you — I&apos;m currently on a job. Visit{' '}
                <span style={{ textDecoration: 'underline' }}>yourwebsite.com</span> to get a quick
                quote and I&apos;ll get back to you shortly!
              </>
            }
            incoming="Thanks for the quick reply! Just filled out the form. Looking forward to hearing from you."
          />
        }
      >
        <h3
          className="font-syne font-extrabold text-3xl sm:text-4xl mb-3"
          style={{ color: '#0A0F1E', letterSpacing: '-0.025em', lineHeight: 1.1 }}
        >
          AI Missed Call Text-Back
        </h3>
        <p
          className="text-base sm:text-lg italic mb-8"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          Every missed call is a potential customer. Our AI texts them back in seconds so you never
          lose a lead while you&apos;re on the job.
        </p>
        <ul className="flex flex-col gap-6 mb-8">
          <BulletItem
            title="Stay Ahead of the Competition"
            desc="Most businesses never call back. Texting back in seconds makes you stand out immediately."
          />
          <BulletItem
            title="No More Lost Leads"
            desc="On a job and can't answer? No problem. The system handles it for you automatically."
          />
          <BulletItem
            title="Show Customers You Care"
            desc="A quick response tells customers their time matters to you. That alone wins jobs."
          />
          <BulletItem
            title="Available Around the Clock"
            desc="Missed a call after hours? The system still responds. Your business never goes dark."
          />
        </ul>
        <ViewDemoBtn />
      </FeatureSection>

      {/* ── Section 3: 5-Star Review Funnel — Phone LEFT ── */}
      <FeatureSection id="feature-reviews" device={<ReviewScreen />}>
        <h3
          className="font-syne font-extrabold text-3xl sm:text-4xl mb-3"
          style={{ color: '#0A0F1E', letterSpacing: '-0.025em', lineHeight: 1.1 }}
        >
          5-Star Review Funnel
        </h3>
        <p
          className="text-base sm:text-lg italic mb-8"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          Happy customers mean to leave reviews — they just forget. We remind them for you,
          automatically, until they do.
        </p>
        <ul className="flex flex-col gap-6 mb-8">
          <BulletItem
            title="5-Star Reviews Only"
            desc="Our system guides customers toward leaving positive reviews while filtering out the ones that could hurt you."
          />
          <BulletItem
            title="Automatic Follow-Up Reminders"
            desc="We send gentle reminders so you get the reviews you earned without having to ask awkwardly."
          />
          <BulletItem
            title="One-Click Review Requests"
            desc="Send a review request to any customer in one tap. We keep it simple so you actually use it."
          />
          <BulletItem
            title="Protect Your Reputation"
            desc="Bad reviews happen. We help make sure they don't define you online."
          />
        </ul>
        <ViewDemoBtn />
      </FeatureSection>

      {/* ── Section 4: Local SEO — Phone RIGHT ── */}
      <FeatureSection id="feature-seo" reverse device={<SeoScreen />}>
        <h3
          className="font-syne font-extrabold text-3xl sm:text-4xl mb-3"
          style={{ color: '#0A0F1E', letterSpacing: '-0.025em', lineHeight: 1.1 }}
        >
          Local SEO
        </h3>
        <p
          className="text-base sm:text-lg italic mb-8"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          When someone searches for your service in your city, you need to be one of the first names
          they see. We make that happen.
        </p>
        <ul className="flex flex-col gap-6 mb-8">
          <BulletItem
            title="Qualified Leads, Not Tire Kickers"
            desc="People who find you through Google are already looking for exactly what you offer. No chasing, no cold calls."
          />
          <BulletItem
            title="Stop Paying for Unqualified Leads"
            desc="Organic search brings in customers who are ready to book — not just browsing."
          />
          <BulletItem
            title="Google Profile Optimization"
            desc="We fully set up and optimize your Google Business profile so you show up in maps and local searches."
          />
          <BulletItem
            title="Long-Term Results"
            desc="Unlike paid ads, SEO keeps working for you month after month without increasing costs."
          />
        </ul>
        <ViewDemoBtn />
      </FeatureSection>

      {/* ── Section 5: One-Click Marketing Campaigns — Phone LEFT ── */}
      <FeatureSection
        id="feature-campaigns"
        device={
          <SmsScreen
            screenClass="phone-screen-campaign"
            outgoing={
              <>
                Hey Maria! It was great working with you. As a thank you, here&apos;s 10% off your
                next service — and your friends and family can use it too!
              </>
            }
            incoming="That's so kind, thank you! I'll definitely pass this along."
          />
        }
      >
        <h3
          className="font-syne font-extrabold text-3xl sm:text-4xl mb-3"
          style={{ color: '#0A0F1E', letterSpacing: '-0.025em', lineHeight: 1.1 }}
        >
          One-Click Marketing Campaigns
        </h3>
        <p
          className="text-base sm:text-lg italic mb-8"
          style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
        >
          Your best new customers are your old ones. We help you stay in touch and keep the jobs
          coming in.
        </p>
        <ul className="flex flex-col gap-6 mb-8">
          <BulletItem
            title="Done For You"
            desc="Pre-built campaigns are ready to go. You activate them with one click — we handle everything else."
          />
          <BulletItem
            title="Referral Campaigns"
            desc="Your happy customers know people just like them. We make it easy for them to spread the word."
          />
          <BulletItem
            title="Return Customer Campaigns"
            desc="Stay top of mind with past customers so when they need work done again, they call you first."
          />
          <BulletItem
            title="No Marketing Team Needed"
            desc="Everything is set up, designed, and ready. You just press a button."
          />
        </ul>
        <ViewDemoBtn />
      </FeatureSection>
    </>
  )
}
