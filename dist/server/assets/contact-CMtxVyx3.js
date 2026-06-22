import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle2, Mail, Clock } from "lucide-react";
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
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 32, className: "text-emerald-500" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Audit Request Received!" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed max-w-sm mx-auto", children: "We'll review your online presence and send you a detailed report within 24 hours." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "space-y-5", children: [
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
    /* @__PURE__ */ jsx("p", { className: "hidden", children: /* @__PURE__ */ jsxs("label", { children: [
      "Don't fill this: ",
      /* @__PURE__ */ jsx("input", { name: "bot-field" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Full Name *" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, placeholder: "John Smith", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Business Name *" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "business", required: true, placeholder: "My Restaurant", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Email Address *" }),
        /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, placeholder: "john@myrestaurant.com", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Phone Number" }),
        /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", placeholder: "(555) 000-0000", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Current Website URL" }),
      /* @__PURE__ */ jsx("input", { type: "url", name: "website", placeholder: "https://myrestaurant.com (leave blank if you don't have one)", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Business Type" }),
      /* @__PURE__ */ jsxs("select", { name: "business_type", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all bg-white", children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select your business type..." }),
        /* @__PURE__ */ jsx("option", { children: "Restaurant" }),
        /* @__PURE__ */ jsx("option", { children: "Cafe / Coffee Shop" }),
        /* @__PURE__ */ jsx("option", { children: "Food Truck" }),
        /* @__PURE__ */ jsx("option", { children: "Bar / Lounge" }),
        /* @__PURE__ */ jsx("option", { children: "Bakery" }),
        /* @__PURE__ */ jsx("option", { children: "Other Local Business" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Services You're Interested In" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: ["Website Development", "AI Automation", "Local SEO", "Google Business Profile", "Online Ordering", "Lead Generation"].map((service) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-[#004B49]/30 hover:bg-[#004B49]/3 transition-all", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", name: "services", value: service, className: "accent-[#004B49]" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: service })
      ] }, service)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1.5", children: "Tell us about your biggest challenge" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, placeholder: "What's holding your business back online? What goals are you trying to achieve?", className: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#004B49] focus:ring-2 focus:ring-[#004B49]/10 text-sm transition-all resize-none" })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "sending", className: "w-full bg-[#004B49] hover:bg-[#006B68] text-white font-semibold py-4 rounded-xl transition-colors text-base disabled:opacity-60", children: status === "sending" ? "Sending Your Request..." : "Request Free Website Audit →" }),
    status === "error" && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm text-center", children: "Something went wrong. Please try again or email us directly." })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxs("main", { className: "pt-20 lg:pt-28", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[#004B49] py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest", children: "Contact" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4", children: [
        "Get Your Free ",
        /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Website Audit" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-lg max-w-2xl mx-auto", children: "We'll review your entire online presence and deliver a custom growth report — completely free, no strings attached." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#F8F6F1]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-7 border border-gray-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-lg mb-5", children: "What You'll Get" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Website speed & mobile report", "Google Maps ranking analysis", "Online reputation review", "Competitor comparison", "Custom growth recommendations", "Estimated revenue opportunity"].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-[#004B49] flex-shrink-0 mt-0.5" }),
            item
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#004B49] rounded-2xl p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg mb-5", children: "Get in Touch" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-[#00D4C8]" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-white/50 text-xs mb-0.5", children: "Email" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:hello@orivanta.com", className: "text-white text-sm hover:text-[#00D4C8] transition-colors", children: "hello@orivanta.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-[#00D4C8]" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-white/50 text-xs mb-0.5", children: "Response Time" }),
                /* @__PURE__ */ jsx("div", { className: "text-white text-sm", children: "Within 24 hours" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-gray-100 p-8 lg:p-10 border border-gray-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Request Your Free Audit" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mb-8", children: "Fill out the form and we'll get back to you within 24 hours." }),
        /* @__PURE__ */ jsx(ContactForm, {})
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as component
};
