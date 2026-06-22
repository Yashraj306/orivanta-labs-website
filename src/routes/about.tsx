import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Target, Lightbulb, Heart } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [{ title: 'About — Orivanta Labs' }],
  }),
})

const values = [
  {
    icon: Target,
    title: 'Results First',
    desc: 'We measure success by one thing: revenue generated for your business. Every decision we make is filtered through this lens.',
  },
  {
    icon: Lightbulb,
    title: 'Always Innovating',
    desc: 'The digital landscape changes fast. We stay ahead of AI, SEO, and web technology so your business always has the edge.',
  },
  {
    icon: Heart,
    title: 'Built on Trust',
    desc: 'No long contracts, no hidden fees, no jargon. We build partnerships based on transparency and consistent results.',
  },
]

const team = [
  {
    name: 'Yash Jadhav',
    role: 'Founder',
    bio: 'Computer Engineering graduate focused on AI, automation, websites, and digital growth systems. Passionate about helping local businesses improve their online presence through practical technology solutions.',
    initials: 'YJ',
  },
]

function AboutPage() {
  return (
    <main className="pt-20 lg:pt-28">
      {/* Hero */}
      <section className="bg-[#004B49] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We're on a Mission to{' '}
              <span className="text-[#00D4C8]">Level the Playing Field</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Big restaurant chains have teams of marketers, developers, and data analysts. We give independent restaurants and local businesses access to the same tools and strategies — at a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                Our Story
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                Born from a Love of Local Business
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Orivanta Labs was founded after watching too many great local restaurants struggle online while serving amazing food. These businesses deserved better — better websites, better visibility, better tools.
                </p>
                <p>
                  We built Orivanta Labs to be the growth partner that local food businesses never had access to. We combine modern web technology, AI automation, and deep local SEO expertise into a unified system that drives measurable results.
                </p>
                <p>
                  Today, we work with restaurants, cafes, and food trucks across the country — helping them build sustainable digital growth systems that keep customers coming back.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
              
              { value: '01', label: 'Restaurant Websites' },
              { value: '02', label: 'Website Redesigns' },
              { value: '03', label: 'Local SEO Foundations' },
              { value: '04', label: 'AI Automation' },
          
              ].map((s) => (
                <div key={s.label} className="bg-[#F8F6F1] rounded-2xl p-7 text-center">
                  <div className="text-4xl font-black text-[#004B49] mb-2">{s.value}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#004B49] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              The Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Specialists, Not Generalists
            </h2>
            <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">
              Every member of our team has deep expertise in serving local food businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#004B49] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5">
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                <div className="text-[#004B49] text-sm font-medium mb-3">{member.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004B49]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We'd love to learn about your business and share how we can help you grow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
