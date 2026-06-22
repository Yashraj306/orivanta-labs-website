import { Link } from '@tanstack/react-router'
import { MapPin, Mail, Phone } from 'lucide-react'

const services = [
  'Restaurant Website Development',
  'AI Automation',
  'Local SEO',
  'Google Business Profile Optimization',
  'Online Ordering Systems',
  'Lead Generation',
]

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#002E2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-lg">
                O
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Orivanta <span className="text-[#00D4C8]">Labs</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building growth systems for local businesses through modern websites, AI automation, and local SEO.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <Mail size={14} className="text-[#00D4C8]" />
                <a href="mailto:hello@orivanta.com" className="hover:text-white transition-colors">hello@orivanta.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <Phone size={14} className="text-[#00D4C8]" />
                <span>Available on contact</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/60 hover:text-[#00D4C8] text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-white/60 hover:text-[#00D4C8] text-sm transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Ready to Grow?</h4>
            <p className="text-white/60 text-sm mb-5">
              Get a free audit of your current online presence and discover what's holding your business back.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Orivanta Labs. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Building Growth Systems for Local Businesses
          </p>
        </div>
      </div>
    </footer>
  )
}
