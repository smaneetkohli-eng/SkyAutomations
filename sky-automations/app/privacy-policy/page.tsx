import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sky Automations',
  description: 'How Sky Automations collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                Who we are
              </h2>
              <p>
                Sky Automations is a marketing automation agency based in Plano, TX. This policy
                explains how we handle information you provide through our website and contact
                forms.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Information we collect
              </h2>
              <p>
                When you submit a contact form, book a call, or otherwise reach out through our
                site, we may collect:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Any details you choose to include in your message</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                How we use your information
              </h2>
              <p>We use the information you provide to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to your inquiries and schedule calls</li>
                <li>Send service-related SMS messages when you have opted in</li>
                <li>Deliver and support the services you request from Sky Automations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                SMS messaging
              </h2>
              <p>
                If you provide your mobile number and consent to receive texts, message frequency
                varies depending on your interaction with us and the services in use. Message and
                data rates may apply.
              </p>
              <p className="mt-3">
                Reply <strong>STOP</strong> to unsubscribe from SMS at any time. Reply{' '}
                <strong>HELP</strong> for help.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Sharing your data
              </h2>
              <p>
                We do not sell your personal information. We do not share your data with third
                parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-syne mb-3 text-xl font-bold text-[#0A0F1E]">
                Your rights and contact
              </h2>
              <p>
                To request access to, correction of, or deletion of your personal data, contact us
                at{' '}
                <a
                  href="mailto:skyautomationsagency@gmail.com"
                  className="font-medium text-[#4A9FFF] hover:text-[#1A6BFF]"
                >
                  skyautomationsagency@gmail.com
                </a>
                .
              </p>
              <p className="mt-3">
                <strong>Sky Automations</strong>
                <br />
                Plano, TX
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
