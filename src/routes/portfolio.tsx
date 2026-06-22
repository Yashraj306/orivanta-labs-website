import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
  head: () => ({
    meta: [{ title: 'Website Redesign Concepts — Orivanta Labs' }],
  }),
})

const projects = [
  {
    name: 'Ajora Ethiopian Kitchen Redesign Concept',
    type: 'Website Redesign Concept',
    location: 'Nashville, TN',
    description:
      'A redesign concept created to demonstrate how a modern Ethiopian restaurant website can improve customer experience, mobile usability, online ordering visibility, and local search readiness.',
    results: [
      'Modern mobile-first design',
      'Online ordering integration ready',
      'SEO-friendly website structure',
      'Improved user experience',
      'Restaurant-focused conversion flow',
    ],
    services: [
      'Website Redesign',
      'Restaurant Website',
      'Mobile Optimization',
      'SEO Foundations',
    ],
    industry: 'Restaurant',
    timeline: 'Concept Project',
    featured: true,
  },

  {
    name: 'Restaurant Ordering Experience Concept',
    type: 'Growth Website Concept',
    location: 'Demo Project',
    description:
      'A sample restaurant growth website demonstrating online ordering workflows, menu presentation, customer engagement, and mobile-first design.',
    results: [
      'Modern ordering experience',
      'Mobile responsive design',
      'Conversion-focused layout',
      'Customer engagement features',
    ],
    services: [
      'Website Development',
      'UI/UX Design',
      'Mobile Optimization',
    ],
    industry: 'Restaurant',
    timeline: 'Concept Project',
    featured: false,
  },

  {
    name: 'Local Business Growth Website Concept',
    type: 'Business Website Concept',
    location: 'Demo Project',
    description:
      'A sample local business website built to showcase modern design principles, lead generation systems, and professional service presentation.',
    results: [
      'Lead generation ready',
      'Modern business design',
      'SEO-ready structure',
      'Fast loading experience',
    ],
    services: [
      'Website Development',
      'Lead Generation',
      'SEO Foundations',
    ],
    industry: 'Local Business',
    timeline: 'Concept Project',
    featured: false,
  },
]

function PortfolioPage() {
  const [featured, ...rest] = projects

  return (
    <main className="pt-20 lg:pt-28">
      {/* Page Hero */}
      <section className="bg-[#004B49] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Website Concepts & Growth Ideas
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of website redesign concepts and digital growth ideas created for local businesses.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Featured Concept
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-2xl shadow-gray-100">
            {/* Project Header */}
            <div className="bg-[#004B49] p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-2">
                    {featured.industry} · {featured.location}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1">{featured.name}</h2>
                  <p className="text-white/60 text-base">{featured.type}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.services.map((s) => (
                    <span key={s} className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {/* Description */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Overview</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8">{featured.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featured.results.map((r) => (
                    <div key={r} className="flex items-start gap-3 bg-[#004B49]/4 rounded-xl p-4">
                      <CheckCircle2 size={18} className="text-[#004B49] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm font-medium">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats sidebar */}
              <div className="p-8 bg-[#F8F6F1]">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Timeline</div>
                    <div className="text-2xl font-bold text-[#004B49]">{featured.timeline}</div>
                    <div className="text-xs text-gray-400">from kickoff to launch</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Industry</div>
                    <div className="font-semibold text-gray-900">{featured.industry}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Location</div>
                    <div className="font-semibold text-gray-900">{featured.location}</div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-400 mb-3">Focus Area</div>
                    <div className="text-3xl font-black text-[#004B49]">Modern Digital Presence
                      </div>
                    <div className="text-sm text-gray-500">Website & Growth Concept</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 flex items-center justify-center gap-2 bg-[#004B49] hover:bg-[#006B68] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm w-full"
                >
                  Get Similar Results <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((p) => (
              <div key={p.name} className="card-hover rounded-2xl border border-gray-100 overflow-hidden">
                <div className="bg-[#004B49] p-6">
                  <div className="text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-2">
                    {p.industry} · {p.location}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{p.name}</h3>
                  <p className="text-white/60 text-sm">{p.type}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="space-y-2 mb-5">
                    {p.results.slice(0, 3).map((r) => (
                      <div key={r} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-[#004B49] flex-shrink-0 mt-0.5" />
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span key={s} className="bg-[#004B49]/8 text-[#004B49] text-xs px-2.5 py-1 rounded-full font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004B49]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
           Want a Website Audit?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free review of your website and discover opportunities to improve your online presence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Get a Free Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
