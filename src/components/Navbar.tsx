import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { location } = useRouterState()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#004B49]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#004B49]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center font-bold text-white text-lg group-hover:bg-white/25 transition-colors">
              O
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Orivanta <span className="text-[#00D4C8]">Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group"
                activeProps={{ className: 'text-white' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00D4C8] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Free Website Audit
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#003330] border-t border-white/10">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                activeProps={{ className: 'block px-4 py-3 text-white bg-white/10 rounded-lg text-sm font-medium' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                to="/contact"
                className="block w-full text-center bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
              >
                Free Website Audit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
