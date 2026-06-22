import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
const projects = [{
  name: "Ajora Ethiopian Kitchen Redesign Concept",
  type: "Website Redesign Concept",
  location: "Nashville, TN",
  description: "A redesign concept created to demonstrate how a modern Ethiopian restaurant website can improve customer experience, mobile usability, online ordering visibility, and local search readiness.",
  results: ["Modern mobile-first design", "Online ordering integration ready", "SEO-friendly website structure", "Improved user experience", "Restaurant-focused conversion flow"],
  services: ["Website Redesign", "Restaurant Website", "Mobile Optimization", "SEO Foundations"],
  industry: "Restaurant",
  timeline: "Concept Project",
  featured: true
}, {
  name: "Restaurant Ordering Experience Concept",
  type: "Growth Website Concept",
  location: "Demo Project",
  description: "A sample restaurant growth website demonstrating online ordering workflows, menu presentation, customer engagement, and mobile-first design.",
  results: ["Modern ordering experience", "Mobile responsive design", "Conversion-focused layout", "Customer engagement features"],
  services: ["Website Development", "UI/UX Design", "Mobile Optimization"],
  industry: "Restaurant",
  timeline: "Concept Project",
  featured: false
}, {
  name: "Local Business Growth Website Concept",
  type: "Business Website Concept",
  location: "Demo Project",
  description: "A sample local business website built to showcase modern design principles, lead generation systems, and professional service presentation.",
  results: ["Lead generation ready", "Modern business design", "SEO-ready structure", "Fast loading experience"],
  services: ["Website Development", "Lead Generation", "SEO Foundations"],
  industry: "Local Business",
  timeline: "Concept Project",
  featured: false
}];
function PortfolioPage() {
  const [featured, ...rest] = projects;
  return /* @__PURE__ */ jsxs("main", { className: "pt-20 lg:pt-28", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[#004B49] py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest", children: "Portfolio" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4", children: "Website Concepts & Growth Ideas" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-lg max-w-2xl mx-auto", children: "A collection of website redesign concepts and digital growth ideas created for local businesses." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "Featured Concept" }) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-gray-100 overflow-hidden shadow-2xl shadow-gray-100", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-[#004B49] p-8 lg:p-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-2", children: [
              featured.industry,
              " · ",
              featured.location
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-white mb-1", children: featured.name }),
            /* @__PURE__ */ jsx("p", { className: "text-white/60 text-base", children: featured.type })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: featured.services.map((s) => /* @__PURE__ */ jsx("span", { className: "bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full", children: s }, s)) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 p-8 lg:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4", children: "Project Overview" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-base leading-relaxed mb-8", children: featured.description }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: featured.results.map((r) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-[#004B49]/4 rounded-xl p-4", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "text-[#004B49] flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-800 text-sm font-medium", children: r })
            ] }, r)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-[#F8F6F1]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6", children: "Project Details" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-1", children: "Timeline" }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#004B49]", children: featured.timeline }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "from kickoff to launch" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-1", children: "Industry" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: featured.industry })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-1", children: "Location" }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: featured.location })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-gray-200", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-3", children: "Focus Area" }),
                /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-[#004B49]", children: "Modern Digital Presence" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "Website & Growth Concept" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 flex items-center justify-center gap-2 bg-[#004B49] hover:bg-[#006B68] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm w-full", children: [
              "Get Similar Results ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Additional Concepts" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: rest.map((p) => /* @__PURE__ */ jsxs("div", { className: "card-hover rounded-2xl border border-gray-100 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#004B49] p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-[#00D4C8] text-xs font-semibold uppercase tracking-widest mb-2", children: [
            p.industry,
            " · ",
            p.location
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-xl mb-1", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm", children: p.type })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-5", children: p.description }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-5", children: p.results.slice(0, 3).map((r) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-[#004B49] flex-shrink-0 mt-0.5" }),
            r
          ] }, r)) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: p.services.map((s) => /* @__PURE__ */ jsx("span", { className: "bg-[#004B49]/8 text-[#004B49] text-xs px-2.5 py-1 rounded-full font-medium", children: s }, s)) })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#004B49]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "Want a Website Audit?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-lg mb-8", children: "Get a free review of your website and discover opportunities to improve your online presence." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold px-8 py-4 rounded-xl transition-colors text-lg", children: [
        "Get a Free Audit ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }) })
  ] });
}
export {
  PortfolioPage as component
};
