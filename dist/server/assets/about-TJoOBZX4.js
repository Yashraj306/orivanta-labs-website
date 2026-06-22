import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Target, Lightbulb, Heart, ArrowRight } from "lucide-react";
const values = [{
  icon: Target,
  title: "Results First",
  desc: "We measure success by one thing: revenue generated for your business. Every decision we make is filtered through this lens."
}, {
  icon: Lightbulb,
  title: "Always Innovating",
  desc: "The digital landscape changes fast. We stay ahead of AI, SEO, and web technology so your business always has the edge."
}, {
  icon: Heart,
  title: "Built on Trust",
  desc: "No long contracts, no hidden fees, no jargon. We build partnerships based on transparency and consistent results."
}];
const team = [{
  name: "Yash Jadhav",
  role: "Founder",
  bio: "Computer Engineering graduate focused on AI, automation, websites, and digital growth systems. Passionate about helping local businesses improve their online presence through practical technology solutions.",
  initials: "YJ"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs("main", { className: "pt-20 lg:pt-28", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[#004B49] py-16 lg:py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest", children: "About Us" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6", children: [
        "We're on a Mission to",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Level the Playing Field" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-xl leading-relaxed", children: "Big restaurant chains have teams of marketers, developers, and data analysts. We give independent restaurants and local businesses access to the same tools and strategies — at a fraction of the cost." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest", children: "Our Story" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-5", children: "Born from a Love of Local Business" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-gray-600 leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { children: "Orivanta Labs was founded after watching too many great local restaurants struggle online while serving amazing food. These businesses deserved better — better websites, better visibility, better tools." }),
          /* @__PURE__ */ jsx("p", { children: "We built Orivanta Labs to be the growth partner that local food businesses never had access to. We combine modern web technology, AI automation, and deep local SEO expertise into a unified system that drives measurable results." }),
          /* @__PURE__ */ jsx("p", { children: "Today, we work with restaurants, cafes, and food trucks across the country — helping them build sustainable digital growth systems that keep customers coming back." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        value: "01",
        label: "Restaurant Websites"
      }, {
        value: "02",
        label: "Website Redesigns"
      }, {
        value: "03",
        label: "Local SEO Foundations"
      }, {
        value: "04",
        label: "AI Automation"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-[#F8F6F1] rounded-2xl p-7 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-[#004B49] mb-2", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-sm", children: s.label })
      ] }, s.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#F8F6F1]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "Our Values" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "How We Work" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: values.map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "card-hover bg-white rounded-2xl p-8 border border-gray-100", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-[#004B49] flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-xl mb-3", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-[#004B49]/8 text-[#004B49] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest", children: "The Team" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900", children: "Specialists, Not Generalists" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg mt-3 max-w-xl mx-auto", children: "Every member of our team has deep expertise in serving local food businesses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: team.map((member) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-[#004B49] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5", children: member.initials }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-lg mb-1", children: member.name }),
        /* @__PURE__ */ jsx("div", { className: "text-[#004B49] text-sm font-medium mb-3", children: member.role }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: member.bio })
      ] }, member.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#004B49]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "Let's Build Something Great Together" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-lg mb-8", children: "We'd love to learn about your business and share how we can help you grow." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-bold px-8 py-4 rounded-xl transition-colors text-lg", children: [
        "Start the Conversation ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
