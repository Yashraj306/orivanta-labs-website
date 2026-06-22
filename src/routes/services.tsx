import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Globe,
  Bot,
  Search,
  MapPin,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: 'Services — Orivanta Labs' }],
  }),
})

const services = [
  {
    icon: Globe,
    title: 'Restaurant Website Development',
    tagline: 'Your website is your #1 sales tool.',
    desc: "We design and build modern, blazing-fast websites that are built to convert. Every site is mobile-first, ADA-compliant, and optimized for Google's Core Web Vitals.",
    features: [
      'Custom design tailored to your brand',
      'Mobile-first, responsive layout',
      'Menu integration with digital ordering',
      'Reservation & booking systems',
      'Google Analytics & performance tracking',
      'SEO-ready structure from day one',
      '95+ Google PageSpeed score guarantee',
      'SSL certificate & security hardening',
    ],
    cta: 'Get a Free Audit',
    accent: '#004B49',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    tagline: 'Work smarter, not harder.',
    desc: 'We implement AI-powered automation that handles repetitive tasks — so you and your team can focus on delivering great food and service.',
    features: [
      'Automated review request campaigns',
      'AI chatbot for website & social DMs',
      'Automated reservation confirmations',
      'Customer follow-up sequences',
      'Upsell & loyalty automation',
      'Social media scheduling',
    ],
    cta: 'Explore AI Services',
    accent: '#006B68',
  },
  {
    icon: Search,
    title: 'Local SEO',
    tagline: 'Get found when it matters most.',
    desc: 'We optimize your entire online presence so you rank at the top of Google when nearby customers are searching for places to eat.',
    features: [
      'On-page SEO optimization',
      'Local keyword research & strategy',
      'Citation building & NAP consistency',
      'Schema markup for restaurants',
      'Monthly ranking reports',
      'Competitor gap analysis',
    ],
    cta: 'Boost My Rankings',
    accent: '#004B49',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile Optimization',
    tagline: 'Own the Google Maps result.',
    desc: "Your Google Business Profile is often the first thing customers see. We optimize every element to maximize clicks, calls, and directions.",
    features: [
      'Complete profile setup & verification',
      'Photo optimization strategy',
      'Weekly posts & updates',
      'Review management & responses',
      'Q&A section optimization',
      'Performance analytics',
    ],
    cta: 'Optimize My Profile',
    accent: '#006B68',
  },
  {
    icon: ShoppingCart,
    title: 'Online Ordering Systems',
    tagline: 'Commission-free ordering that you own.',
    desc: "Stop giving 30% to DoorDash. We integrate commission-free ordering directly into your website so every order goes straight to your pocket.",
    features: [
      'Commission-free online ordering',
      'Custom-branded order portal',
      'POS system integration',
      'Pickup & delivery management',
      'Upsell prompts built-in',
      'Real-time order notifications',
    ],
    cta: 'Set Up Ordering',
    accent: '#004B49',
  },
  {
    icon: TrendingUp,
    title: 'Lead Generation',
    tagline: 'A full customer pipeline, on autopilot.',
    desc: 'We run targeted digital campaigns — Google Ads, social media, and retargeting — that consistently bring new customers to your business.',
    features: [
      'Google Ads management',
      'Facebook & Instagram ads',
      'Retargeting campaigns',
      'Landing page creation',
      'A/B testing & optimization',
      'ROI reporting & dashboards',
    ],
    cta: 'Start Generating Leads',
    accent: '#006B68',
  },
]

function ServicesPage() {
  return (
    <main className="pt-20 lg:pt-28">
      {/* Page Hero */}
      <section className="bg-[#004B49] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Growth Services for <span className="text-[#00D4C8]">Local Businesses</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every service we offer is designed to do one thing: bring more customers to your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map(({ icon: Icon, title, tagline, desc, features, cta }, i) => (
            <div
              key={title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-[#004B49]/8 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#004B49]" />
                </div>
                <div className="text-[#004B49] text-sm font-semibold mb-2">{tagline}</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#004B49] hover:bg-[#006B68] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  {cta} <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`bg-[#F8F6F1] rounded-2xl p-8 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">What's Included</h4>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle2 size={17} className="text-[#004B49] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#004B49]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Start with a free audit. No pressure, no obligation — just clarity on what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Get a Free Website Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
