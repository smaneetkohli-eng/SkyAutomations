'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PlayCircle, Monitor, Globe, Settings, MapPin, BarChart3 } from 'lucide-react'

const stats = [
  { value: '93%', label: 'of people use Google to find local businesses' },
  { value: '97%', label: 'of people learn more about a local company online than anywhere else' },
  { value: '46%', label: 'of all searches have local purchase intent' },
]

const featureCards = [
  {
    icon: Monitor,
    title: 'On-Site SEO',
    desc: 'We optimize your keywords, meta tags, headers, and page speed so Google knows exactly who you are and where you are — and ranks you accordingly.',
  },
  {
    icon: Globe,
    title: 'Off-Site SEO',
    desc: 'We optimize your Google Business Profile, build citations, and monitor inbound links to grow your local authority and push you higher in local search results.',
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    desc: "We make sure your website loads fast, works on every device, and is set up correctly so Google has no reason to ignore you.",
  },
  {
    icon: MapPin,
    title: 'Google My Business',
    desc: "We set up and manage your Google Business profile so your business shows up on the map when someone nearby searches for your service.",
  },
  {
    icon: BarChart3,
    title: 'Monthly SEO Reporting',
    desc: "Every month we send you a plain-English report showing how your rankings are improving and what we're doing next.",
  },
]

export default function LocalSeoPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO TITLE ── */}
      <section className="pt-28 pb-10 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[1.5px] uppercase mb-5"
            style={{ background: 'rgba(74,159,255,0.10)', color: '#4A9FFF', border: '1px solid rgba(74,159,255,0.20)' }}
          >
            Product
          </span>
          <h1
            className="font-syne font-extrabold text-[#0A0F1E] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.035em', lineHeight: 1.05 }}
          >
            Local SEO
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
          >
            Get found on Google by local customers who are actively looking for your service.
          </p>
        </div>
      </section>

      {/* ── GRADIENT HERO→STATS ── */}
      <div aria-hidden className="pointer-events-none" style={{ height: 48, background: 'linear-gradient(to bottom, #ffffff 0%, #F8FAFF 100%)', marginTop: -1 }} />

      {/* ── STATS + VIDEO ── */}
      <section className="pb-14 px-4" style={{ background: '#F8FAFF' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Stats */}
          <div className="flex flex-col gap-5">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl px-7 py-6 bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.06)', borderLeft: '4px solid #4A9FFF', boxShadow: '0 4px 24px rgba(74,159,255,0.07)' }}
              >
                <p
                  className="font-syne font-extrabold mb-1"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', color: '#4A9FFF', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="flex flex-col gap-3">
            <p className="text-center font-syne font-bold text-xl text-[#0A0F1E]">
              See a short demo below
            </p>
            <div
              className="w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-3"
              style={{
                background: '#0F172A',
                border: '1px solid rgba(74,159,255,0.18)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(74,159,255,0.15)', border: '1.5px solid rgba(74,159,255,0.3)' }}
              >
                <PlayCircle size={32} color="#4A9FFF" strokeWidth={1.5} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-dm-sans)', fontSize: 13 }}>
                Demo video coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRADIENT BRIDGE ── */}
      <div aria-hidden className="pointer-events-none" style={{ height: 160, background: 'linear-gradient(to bottom, #F8FAFF 0%, #dceaff 20%, #a3bfef 40%, #4a6fa8 60%, #1e3a6e 78%, #0F172A 100%)', marginTop: -1 }} />

      {/* ── WHAT IS IT? ── */}
      <section className="pb-10 px-4" style={{ background: '#0F172A' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-syne font-extrabold text-white text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            What is local SEO?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureCards.map((card, i) => (
              <div
                key={card.title}
                className={`rounded-2xl p-7${featureCards.length % 2 !== 0 && i === featureCards.length - 1 ? ' sm:col-span-2' : ''}`}
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(74,159,255,0.12)' }}><card.icon size={18} color="#4A9FFF" strokeWidth={1.75} /></span>
                  <h3
                    className="font-syne font-bold text-lg"
                    style={{ color: '#0A0F1E', letterSpacing: '-0.015em' }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{ color: '#4B5563', fontFamily: 'var(--font-dm-sans)', fontWeight: 300, lineHeight: 1.7 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pt-10 pb-20 px-4" style={{ background: '#0F172A' }}>
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-3xl px-10 py-12 text-center"
            style={{ background: '#ffffff', boxShadow: '0 8px 48px rgba(0,0,0,0.25)' }}
          >
            <h2
              className="font-syne font-extrabold text-[#0A0F1E] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}
            >
              Ready to rank higher on Google?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
            >
              Book a free 20-minute call and we&apos;ll show you exactly where you stand and how to climb.
            </p>
            <Link href="/#book-call" className="btn-primary text-base">
              Book A Free Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
