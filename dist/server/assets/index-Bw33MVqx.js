import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Globe, Bot, Search, MapPin, ShoppingCart, TrendingUp, ChevronRight, Monitor, CheckCircle2, Zap, BarChart3, Clock, Shield, Users } from "lucide-react";
const services = [{
  icon: Globe,
  title: "Restaurant Website Development",
  desc: "Beautiful, fast websites designed to convert visitors into paying customers — with menu integration and online booking."
}, {
  icon: Bot,
  title: "AI Automation",
  desc: "Automate reservations, customer follow-ups, review requests, and more — saving you hours every week."
}, {
  icon: Search,
  title: "Local SEO",
  desc: "Rank at the top of Google when hungry customers search for restaurants like yours in your area."
}, {
  icon: MapPin,
  title: "Google Business Profile Optimization",
  desc: "Maximize your visibility on Google Maps and Search with a fully optimized business profile."
}, {
  icon: ShoppingCart,
  title: "Online Ordering Systems",
  desc: "Commission-free online ordering that integrates seamlessly with your existing workflow."
}, {
  icon: TrendingUp,
  title: "Lead Generation",
  desc: "Targeted digital campaigns that bring qualified customers through your door consistently."
}];
const steps = [{
  number: "01",
  title: "Free Website Audit",
  desc: "We analyze your current online presence, competitors, and missed opportunities — at no cost."
}, {
  number: "02",
  title: "Custom Growth Plan",
  desc: "We build a tailored strategy specific to your restaurant and local market."
}, {
  number: "03",
  title: "We Build & Launch",
  desc: "Our team builds your digital system fast — you stay focused on running your business."
}, {
  number: "04",
  title: "Growth & Optimization",
  desc: "We monitor results and continuously optimize your systems for maximum performance."
}];
const whyChoose = [{
  icon: Zap,
  title: "Built for Speed",
  desc: "Every site we build scores 95+ on Google PageSpeed — fast sites rank higher and convert better."
}, {
  icon: BarChart3,
  title: "Data-Driven",
  desc: "Every decision is backed by local market data and proven restaurant industry benchmarks."
}, {
  icon: Clock,
  title: "Fast Turnaround",
  desc: "Most websites launch in 7–14 days. We move quickly so you start seeing results sooner."
}, {
  icon: Shield,
  title: "No Long Contracts",
  desc: "We earn your business every month. No lock-in contracts — just results-driven partnerships."
}, {
  icon: Users,
  title: "Restaurant Specialists",
  desc: "We focus exclusively on food & beverage and local businesses. We know your industry."
}, {
  icon: TrendingUp,
  title: "Full-Stack Growth",
  desc: "Website, SEO, automation, and ads — all under one roof for a unified growth strategy."
}];
function ContactForm() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data).toString()
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
    /* @__PURE__ */ jsx("p", { className: "hidden", children: /* @__PURE__ */ jsxs("label", { children: [
      "Don't fill this: ",
      /* @__PURE__ */ jsx("input", { name: "bot-field" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Full Name *" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, placeholder: "John Smith", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Business Name *" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "business", required: true, placeholder: "My Restaurant", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Email Address *" }),
        /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, placeholder: "john@myrestaurant.com", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Phone Number" }),
        /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", placeholder: "(555) 000-0000", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Current Website URL" }),
      /* @__PURE__ */ jsx("input", { type: "url", name: "website", placeholder: "https://myrestaurant.com", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "What's your biggest challenge?" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 3, placeholder: "Tell us about your current situation and what you're looking to achieve...", className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all resize-none" })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "sending", className: "w-full bg-[#004B49] hover:bg-[#006B68] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm disabled:opacity-60", children: status === "sending" ? "Sending..." : "Get My Free Audit →" }),
    status === "success" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-600 bg-emerald-50 rounded-xl px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { size: 16 }),
      /* @__PURE__ */ jsx("span", { children: "Thank you! We'll be in touch within 24 hours." })
    ] }),
    status === "error" && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm text-center", children: "Something went wrong. Please try again." })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative bg-[#004B49] overflow-hidden pt-20 lg:pt-28", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", style: {
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-[#00D4C8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-64 h-64 bg-[#00D4C8]/5 rounded-full blur-3xl translate-y-1/2" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-[#00D4C8] rounded-full animate-pulse" }),
          "Trusted by restaurants & local businesses"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto", children: [
          "Helping Local Businesses",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Generate More Customers" }),
          " ",
          "Through Websites, AI & Automation"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10", children: "We help restaurants and local businesses increase online orders, bookings, and customer engagement with modern digital systems." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#00D4C8]/25 w-full sm:w-auto", children: "Get a Free Website Audit" }),
          /* @__PURE__ */ jsxs(Link, { to: "/services", className: "border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-xl transition-colors w-full sm:w-auto flex items-center justify-center gap-2", children: [
            "View Our Services ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 max-w-lg mx-auto", children: [{
          value: "Mobile",
          label: "Mobile-First Design"
        }, {
          value: "SEO",
          label: "SEO-Ready Websites"
        }, {
          value: "AI",
          label: "Automation Systems"
        }].map((stat) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold text-[#00D4C8]", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-white/50 text-xs mt-1", children: stat.label })
        ] }, stat.label)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative -mb-px", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 1440 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-full", children: /* @__PURE__ */ jsx("path", { d: "M0 60L48 50C96 40 192 20 288 13.3C384 6.7 480 13.3 576 23.3C672 33.3 768 46.7 864 46.7C960 46.7 1056 33.3 1152 26.7C1248 20 1344 20 1392 20H1440V60H0Z", fill: "white" }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "services", className: "py-20 lg:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "What We Do" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: [
          "Everything Your Business Needs to",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#004B49]", children: "Grow Online" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg max-w-2xl mx-auto", children: "Six proven growth services, built specifically for restaurants and local businesses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "card-hover group p-7 rounded-2xl border border-gray-100 hover:border-[#004B49]/20 bg-white hover:shadow-xl hover:shadow-[#004B49]/5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-[#004B49]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#004B49] transition-colors", children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-[#004B49] group-hover:text-white transition-colors" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-lg mb-2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: desc }),
        /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-[#004B49] text-sm font-medium mt-4 group-hover:gap-2.5 transition-all", children: [
          "Learn more ",
          /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-[#F8F6F1]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "The Process" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: [
          "Simple. Fast. ",
          /* @__PURE__ */ jsx("span", { className: "text-[#004B49]", children: "Built for Growth.." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg max-w-xl mx-auto", children: "A straightforward process focused on helping local businesses improve their online presence." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#004B49]/20 to-transparent" }),
        steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#004B49] text-white text-2xl font-black mb-5 shadow-lg shadow-[#004B49]/25", children: step.number }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-lg mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: step.desc })
        ] }, step.number))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "Portfolio" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: [
          "Before & After:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#004B49]", children: "Real Transformations" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg max-w-2xl mx-auto", children: "See how we transform outdated, low-performing websites into powerful revenue-generating machines." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#004B49] px-8 py-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-1", children: "Featured Project" }),
            /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold", children: "Ajora Ethiopian Kitchen — Website Redesign" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors", children: [
            "View Portfolio ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-gray-50 border-r border-gray-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm font-medium uppercase tracking-wide", children: "Before" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-gray-200 p-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-gray-200 rounded h-8 mb-3 w-full" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-gray-100 rounded flex-1 h-32 flex items-center justify-center", children: /* @__PURE__ */ jsx(Monitor, { size: 32, className: "text-gray-300" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-200 h-4 rounded w-4/5" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-100 h-3 rounded w-3/5" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-100 h-3 rounded w-4/5" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-100 h-3 rounded w-2/5" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-200 h-8 rounded w-3/5 mt-4" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-gray-100 h-3 rounded" }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-100 h-3 rounded w-4/5" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["Poor mobile experience", "No online ordering", "Page 4 on Google", "Low conversion rate", "Slow load time (8+ sec)"].map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: "w-4 h-4 rounded-full bg-red-100 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0", children: "✕" }),
              i
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-emerald-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#004B49] text-sm font-medium uppercase tracking-wide", children: "After Orivanta Labs" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#004B49] rounded-2xl p-4 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 rounded h-8 mb-3 w-full flex items-center px-3 gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded bg-[#00D4C8]/30" }),
                /* @__PURE__ */ jsx("div", { className: "flex-1 h-3 bg-white/20 rounded" }),
                /* @__PURE__ */ jsx("div", { className: "bg-[#00D4C8] h-6 w-16 rounded text-[#004B49] text-xs flex items-center justify-center font-semibold", children: "Order" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-xl p-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[#00D4C8] text-xs font-bold mb-1", children: "Ajora Ethiopian Kitchen" }),
                /* @__PURE__ */ jsx("div", { className: "text-white/80 text-[10px] mb-2", children: "Authentic flavors from the heart of Ethiopia" }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-[#00D4C8] text-[#004B49] text-[10px] font-bold px-2 py-1 rounded", children: "Order Now" }),
                  /* @__PURE__ */ jsx("div", { className: "border border-white/30 text-white/70 text-[10px] px-2 py-1 rounded", children: "View Menu" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: ["#00D4C8", "#006B68", "#004B49"].map((c, i) => /* @__PURE__ */ jsx("div", { className: "rounded-lg h-12", style: {
                backgroundColor: c + "33",
                border: `1px solid ${c}40`
              } }, i)) })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["Mobile-first, blazing fast", "Commission-free ordering live", "Google Maps #1 in area", "+65% more reservations", "1.8 sec load time"].map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-emerald-500 flex-shrink-0" }),
              i
            ] }, i)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 text-[#004B49] font-semibold hover:gap-3 transition-all", children: [
        "See More Projects ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 lg:py-28 bg-[#004B49] relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-[#00D4C8]/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "Why Orivanta Labs" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
            "The Agency Built for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Your Industry" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg max-w-2xl mx-auto", children: "We're not a generalist agency. We're specialists in helping local food businesses dominate their market online." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: whyChoose.map(({
          icon: Icon,
          title,
          desc
        }) => /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-[#00D4C8]/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-[#00D4C8]" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: desc })
        ] }, title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "Our Focus" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: "Built For Modern Local Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg max-w-xl mx-auto", children: "We focus on creating digital systems that help businesses improve their online presence and customer experience." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Modern Websites" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Responsive websites designed for today's customers." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Local SEO" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Helping customers discover businesses online." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "AI Automation" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Automating repetitive business processes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Growth Systems" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Digital solutions focused on long-term growth." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 lg:py-28 bg-[#F8F6F1]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest", children: "Free Audit" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: [
          "Let's Audit Your",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#004B49]", children: "Online Presence" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg mb-8 leading-relaxed", children: "In 24 hours, we'll review your website, Google ranking, and online reputation — and send you a detailed report of what's holding you back." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Website speed & mobile audit", "Google Maps ranking analysis", "Competitor comparison report", "Custom growth recommendations", "100% free, no obligation"].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-gray-700 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-[#004B49] flex-shrink-0" }),
          item
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl shadow-gray-100 p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-xl mb-6", children: "Get Your Free Website Audit" }),
        /* @__PURE__ */ jsx(ContactForm, {})
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
