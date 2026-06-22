import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Globe,
  Bot,
  Search,
  MapPin,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Star,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Users,
  Monitor,
  Smartphone,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: Globe,
    title: 'Restaurant Website Development',
    desc: 'Beautiful, fast websites designed to convert visitors into paying customers — with menu integration and online booking.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Automate reservations, customer follow-ups, review requests, and more — saving you hours every week.',
  },
  {
    icon: Search,
    title: 'Local SEO',
    desc: 'Rank at the top of Google when hungry customers search for restaurants like yours in your area.',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile Optimization',
    desc: 'Maximize your visibility on Google Maps and Search with a fully optimized business profile.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Ordering Systems',
    desc: 'Commission-free online ordering that integrates seamlessly with your existing workflow.',
  },
  {
    icon: TrendingUp,
    title: 'Lead Generation',
    desc: 'Targeted digital campaigns that bring qualified customers through your door consistently.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Free Website Audit',
    desc: 'We analyze your current online presence, competitors, and missed opportunities — at no cost.',
  },
  {
    number: '02',
    title: 'Custom Growth Plan',
    desc: 'We build a tailored strategy specific to your restaurant and local market.',
  },
  {
    number: '03',
    title: 'We Build & Launch',
    desc: 'Our team builds your digital system fast — you stay focused on running your business.',
  },
  {
    number: '04',
    title: 'Growth & Optimization',
    desc: 'We monitor results and continuously optimize your systems for maximum performance.',
  },
]

const whyChoose = [
  { icon: Zap, title: 'Built for Speed', desc: 'Every site we build scores 95+ on Google PageSpeed — fast sites rank higher and convert better.' },
  { icon: BarChart3, title: 'Data-Driven', desc: 'Every decision is backed by local market data and proven restaurant industry benchmarks.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most websites launch in 7–14 days. We move quickly so you start seeing results sooner.' },
  { icon: Shield, title: 'No Long Contracts', desc: 'We earn your business every month. No lock-in contracts — just results-driven partnerships.' },
  { icon: Users, title: 'Restaurant Specialists', desc: 'We focus exclusively on food & beverage and local businesses. We know your industry.' },
  { icon: TrendingUp, title: 'Full-Stack Growth', desc: 'Website, SEO, automation, and ads — all under one roof for a unified growth strategy.' },
]

const highlights = [
  {
    title: 'Modern Websites',
    description: 'Mobile-first websites designed for local businesses.',
  },
  {
    title: 'Local SEO',
    description: 'Helping businesses improve online visibility.',
  },
  {
    title: 'AI Automation',
    description: 'Automating repetitive customer interactions and workflows.',
  },
]

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

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name *</label>
          <input
            type="text"
            name="business"
            required
            placeholder="My Restaurant"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@myrestaurant.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Website URL</label>
        <input
          type="url"
          name="website"
          placeholder="https://myrestaurant.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">What's your biggest challenge?</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your current situation and what you're looking to achieve..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#004B49] hover:bg-[#006B68] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Get My Free Audit →'}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 rounded-xl px-4 py-3 text-sm">
          <CheckCircle2 size={16} />
          <span>Thank you! We'll be in touch within 24 hours.</span>
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative bg-[#004B49] overflow-hidden pt-20 lg:pt-28">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4C8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#00D4C8]/5 rounded-full blur-3xl translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#00D4C8] rounded-full animate-pulse" />
            Trusted by restaurants & local businesses
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto">
            Helping Local Businesses{' '}
            <span className="text-[#00D4C8]">Generate More Customers</span>{' '}
            Through Websites, AI & Automation
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            We help restaurants and local businesses increase online orders, bookings, and customer engagement with modern digital systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#00D4C8]/25 w-full sm:w-auto"
            >
              Get a Free Website Audit
            </Link>
            <Link
              to="/services"
              className="border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-xl transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            >
              View Our Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
                { value: 'Mobile', label: 'Mobile-First Design' },
                { value: 'SEO', label: 'SEO-Ready Websites' },
                { value: 'AI', label: 'Automation Systems' },
              ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00D4C8]">{stat.value}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 50C96 40 192 20 288 13.3C384 6.7 480 13.3 576 23.3C672 33.3 768 46.7 864 46.7C960 46.7 1056 33.3 1152 26.7C1248 20 1344 20 1392 20H1440V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs to{' '}
              <span className="text-[#004B49]">Grow Online</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Six proven growth services, built specifically for restaurants and local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover group p-7 rounded-2xl border border-gray-100 hover:border-[#004B49]/20 bg-white hover:shadow-xl hover:shadow-[#004B49]/5">
                <div className="w-12 h-12 bg-[#004B49]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#004B49] transition-colors">
                  <Icon size={22} className="text-[#004B49] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-[#004B49] text-sm font-medium mt-4 group-hover:gap-2.5 transition-all">
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              The Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple. Fast. <span className="text-[#004B49]">Built for Growth..</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A straightforward process focused on helping local businesses improve their online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#004B49]/20 to-transparent" />

            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#004B49] text-white text-2xl font-black mb-5 shadow-lg shadow-[#004B49]/25">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Before & After:{' '}
              <span className="text-[#004B49]">Real Transformations</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how we transform outdated, low-performing websites into powerful revenue-generating machines.
            </p>
          </div>

          {/* Featured Project */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-100">
            {/* Header */}
            <div className="bg-[#004B49] px-8 py-5 flex items-center justify-between">
              <div>
                <div className="text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-1">Featured Project</div>
                <h3 className="text-white text-xl font-bold">Ajora Ethiopian Kitchen — Website Redesign</h3>
              </div>
              <Link to="/portfolio" className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors">
                View Portfolio <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Before */}
              <div className="p-8 bg-gray-50 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">Before</span>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6">
                  {/* Mock old website */}
                  <div className="bg-gray-200 rounded h-8 mb-3 w-full" />
                  <div className="flex gap-3 mb-4">
                    <div className="bg-gray-100 rounded flex-1 h-32 flex items-center justify-center">
                      <Monitor size={32} className="text-gray-300" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-gray-200 h-4 rounded w-4/5" />
                      <div className="bg-gray-100 h-3 rounded w-3/5" />
                      <div className="bg-gray-100 h-3 rounded w-4/5" />
                      <div className="bg-gray-100 h-3 rounded w-2/5" />
                      <div className="bg-gray-200 h-8 rounded w-3/5 mt-4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 h-3 rounded" />
                    <div className="bg-gray-100 h-3 rounded w-4/5" />
                  </div>
                </div>
                <ul className="space-y-2">
                  {['Poor mobile experience', 'No online ordering', 'Page 4 on Google', 'Low conversion rate', 'Slow load time (8+ sec)'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-4 h-4 rounded-full bg-red-100 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0">✕</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-8 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[#004B49] text-sm font-medium uppercase tracking-wide">After Orivanta Labs</span>
                </div>
                <div className="bg-[#004B49] rounded-2xl p-4 mb-6">
                  {/* Mock new website */}
                  <div className="bg-white/10 rounded h-8 mb-3 w-full flex items-center px-3 gap-2">
                    <div className="w-6 h-6 rounded bg-[#00D4C8]/30" />
                    <div className="flex-1 h-3 bg-white/20 rounded" />
                    <div className="bg-[#00D4C8] h-6 w-16 rounded text-[#004B49] text-xs flex items-center justify-center font-semibold">Order</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 mb-3">
                    <div className="text-[#00D4C8] text-xs font-bold mb-1">Ajora Ethiopian Kitchen</div>
                    <div className="text-white/80 text-[10px] mb-2">Authentic flavors from the heart of Ethiopia</div>
                    <div className="flex gap-2">
                      <div className="bg-[#00D4C8] text-[#004B49] text-[10px] font-bold px-2 py-1 rounded">Order Now</div>
                      <div className="border border-white/30 text-white/70 text-[10px] px-2 py-1 rounded">View Menu</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['#00D4C8', '#006B68', '#004B49'].map((c, i) => (
                      <div key={i} className="rounded-lg h-12" style={{ backgroundColor: c + '33', border: `1px solid ${c}40` }} />
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {['Mobile-first, blazing fast', 'Commission-free ordering live', 'Google Maps #1 in area', '+65% more reservations', '1.8 sec load time'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#004B49] font-semibold hover:gap-3 transition-all">
              See More Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 lg:py-28 bg-[#004B49] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D4C8]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Why Orivanta Labs
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Agency Built for{' '}
              <span className="text-[#00D4C8]">Your Industry</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're not a generalist agency. We're specialists in helping local food businesses dominate their market online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#00D4C8]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#00D4C8]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
        Our Focus
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Built For Modern Local Businesses
      </h2>

      <p className="text-gray-500 text-lg max-w-xl mx-auto">
        We focus on creating digital systems that help businesses improve their online presence and customer experience.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-6 rounded-2xl border">
        <h3 className="font-semibold mb-2">Modern Websites</h3>
        <p className="text-gray-600 text-sm">Responsive websites designed for today's customers.</p>
      </div>

      <div className="p-6 rounded-2xl border">
        <h3 className="font-semibold mb-2">Local SEO</h3>
        <p className="text-gray-600 text-sm">Helping customers discover businesses online.</p>
      </div>

      <div className="p-6 rounded-2xl border">
        <h3 className="font-semibold mb-2">AI Automation</h3>
        <p className="text-gray-600 text-sm">Automating repetitive business processes.</p>
      </div>

      <div className="p-6 rounded-2xl border">
        <h3 className="font-semibold mb-2">Growth Systems</h3>
        <p className="text-gray-600 text-sm">Digital solutions focused on long-term growth.</p>
      </div>
    </div>
  </div>
</section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-20 lg:py-28 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                Free Audit
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Let's Audit Your{' '}
                <span className="text-[#004B49]">Online Presence</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                In 24 hours, we'll review your website, Google ranking, and online reputation — and send you a detailed report of what's holding you back.
              </p>
              <ul className="space-y-3">
                {[
                  'Website speed & mobile audit',
                  'Google Maps ranking analysis',
                  'Competitor comparison report',
                  'Custom growth recommendations',
                  '100% free, no obligation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 size={18} className="text-[#004B49] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Get Your Free Website Audit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
