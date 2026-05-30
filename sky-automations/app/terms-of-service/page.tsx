import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Sky Automations',
  description: 'Terms of service and SMS messaging terms for Sky Automations.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F0F4FF] pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#4A9FFF] transition-colors hover:text-[#1A6BFF]"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            ← Back to home
          </Link>

          <span className="section-label mb-5 inline-block">Legal</span>

          <h1
            className="font-syne text-[#0A0F1E]"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Terms of Service
          </h1>

          <p
            className="mt-3 text-sm"
            style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)' }}
          >
            Last updated: May 30, 2026
          </p>

          <div
            className="mt-10 space-y-8 text-base leading-relaxed"
            style={{ color: '#374151', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
          >
            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Agreement
              </h2>
              <p>
                By using the Sky Automations website and services, you agree to these Terms of
                Service. If you do not agree, please do not use our site or submit your information
                through our forms.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                SMS messaging terms
              </h2>
              <p>
                By submitting a contact form or providing your mobile number on our website, you
                consent to receive automated text messages from Sky Automations related to your
                inquiry, appointment scheduling, and service communications.
              </p>
              <p className="mt-3">
                Message frequency varies. Message and data rates may apply. Consent to receive SMS
                is not a condition of purchase.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                How to opt out
              </h2>
              <p>
                You may opt out of SMS at any time by replying <strong>STOP</strong> to any message
                you receive from us. After you opt out, we will send a confirmation and will not
                send further marketing texts unless you opt in again.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Governing law
              </h2>
              <p>
                These terms are governed by the laws of the State of Texas, without regard to
                conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Contact
              </h2>
              <p>
                Questions about these terms? Contact Sky Automations at{' '}
                <a
                  href="mailto:skyautomationsagency@gmail.com"
                  className="font-medium text-[#4A9FFF] hover:text-[#1A6BFF]"
                >
                  skyautomationsagency@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
