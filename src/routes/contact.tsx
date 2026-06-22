import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Mail, Phone, Clock } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [{ title: 'Contact — Orivanta Labs' }],
  }),
})

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Audit Request Received!</h3>
        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
          We'll review your online presence and send you a detailed report within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don't fill this: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name *</label>
          <input
            type="text"
            name="business"
            required
            placeholder="My Restaurant"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@myrestaurant.com"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Website URL</label>
        <input
          type="url"
          name="website"
          placeholder="https://myrestaurant.com (leave blank if you don't have one)"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Type</label>
        <select
          name="business_type"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all bg-white"
        >
          <option value="">Select your business type...</option>
          <option>Restaurant</option>
          <option>Cafe / Coffee Shop</option>
          <option>Food Truck</option>
          <option>Bar / Lounge</option>
          <option>Bakery</option>
          <option>Other Local Business</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Services You're Interested In</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            'Website Development',
            'AI Automation',
            'Local SEO',
            'Google Business Profile',
            'Online Ordering',
            'Lead Generation',
          ].map((service) => (
            <label key={service} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-[#004B49]/30 hover:bg-[#004B49]/3 transition-all">
              <input type="checkbox" name="services" value={service} className="accent-[#004B49]" />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your biggest challenge</label>
        <textarea
          name="message"
          rows={4}
          placeholder="What's holding your business back online? What goals are you trying to achieve?"
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#004B49] hover:bg-[#006B68] text-white font-semibold py-4 rounded-xl transition-colors text-base disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending Your Request...' : 'Request Free Website Audit →'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}

function ContactPage() {
  return (
    <main className="pt-20 lg:pt-28">
      {/* Hero */}
      <section className="bg-[#004B49] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get Your Free <span className="text-[#00D4C8]">Website Audit</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We'll review your entire online presence and deliver a custom growth report — completely free, no strings attached.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">What You'll Get</h3>
                <ul className="space-y-3">
                  {[
                    'Website speed & mobile report',
                    'Google Maps ranking analysis',
                    'Online reputation review',
                    'Competitor comparison',
                    'Custom growth recommendations',
                    'Estimated revenue opportunity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-[#004B49] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#004B49] rounded-2xl p-7">
                <h3 className="font-bold text-white text-lg mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#00D4C8]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">Email</div>
                      <a href="mailto:hello@orivanta.com" className="text-white text-sm hover:text-[#00D4C8] transition-colors">hello@orivanta.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#00D4C8]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">Response Time</div>
                      <div className="text-white text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-gray-100 p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Free Audit</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
