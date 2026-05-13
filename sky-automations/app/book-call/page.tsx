import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#0A0F1E] outline-none transition focus:border-[#4A9FFF] focus:ring-4 focus:ring-[#4A9FFF]/10'

const labelClass = 'mb-2 block text-sm font-medium text-[#0A0F1E]'

export default function BookCallPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F0F4FF] pt-28">
        <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="section-label mb-5 inline-block">Book A Free Call</span>
              <h1
                className="font-syne text-[#0A0F1E]"
                style={{
                  fontSize: 'clamp(42px, 6vw, 76px)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.02,
                }}
              >
                Tell us what you need help with.
              </h1>
              <p
                className="mt-5 max-w-xl text-lg leading-relaxed"
                style={{ color: '#6B7280', fontFamily: 'var(--font-dm-sans)', fontWeight: 300 }}
              >
                Fill this out and Sky Automations will get the details by email, then reach out to
                schedule the best time for your free call.
              </p>

              <div className="mt-8 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_16px_56px_rgba(10,15,30,0.08)] backdrop-blur">
                <p className="font-syne text-2xl font-extrabold text-[#0A0F1E]">
                  What happens next?
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#6B7280]">
                  <li>1. We review your business and what you are trying to fix.</li>
                  <li>2. We reach out with a few available times.</li>
                  <li>3. On the call, we answer questions honestly and explain the next step.</li>
                </ul>
              </div>
            </div>

            <form
              action="https://formsubmit.co/skyautomationagency@gmail.com"
              method="POST"
              className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_18px_70px_rgba(74,159,255,0.14)] sm:p-8"
            >
              <input type="hidden" name="_subject" value="New Sky Automations booking request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name
                  </label>
                  <input id="name" name="Name" type="text" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input id="phone" name="Phone" type="tel" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input id="email" name="Email" type="email" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="business" className={labelClass}>
                    Business name
                  </label>
                  <input id="business" name="Business name" type="text" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Main service or trade
                  </label>
                  <input
                    id="service"
                    name="Main service or trade"
                    type="text"
                    required
                    placeholder="Roofing, plumbing, HVAC, etc."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="website" className={labelClass}>
                    Website, if you have one
                  </label>
                  <input
                    id="website"
                    name="Website"
                    type="url"
                    placeholder="https://"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="reason" className={labelClass}>
                  What do you want help with?
                </label>
                <textarea
                  id="reason"
                  name="Reason for booking"
                  required
                  rows={5}
                  placeholder="Tell us what is going on and what you want to improve."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="best-time" className={labelClass}>
                  Best time to reach you
                </label>
                <input
                  id="best-time"
                  name="Best time to reach out"
                  type="text"
                  placeholder="Example: Weekdays after 3pm"
                  className={inputClass}
                />
              </div>

              <button type="submit" className="btn-primary mt-7 w-full text-base">
                Send Booking Request
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-[#6B7280]">
                This sends your request to skyautomationagency@gmail.com.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
