import { useRouterState, Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Mail, Phone } from "lucide-react";
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#004B49]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-[#004B49]"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 lg:h-20", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center font-bold text-white text-lg group-hover:bg-white/25 transition-colors", children: "O" }),
            /* @__PURE__ */ jsxs("span", { className: "text-white font-bold text-lg tracking-tight", children: [
              "Orivanta ",
              /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Labs" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.to,
              className: "text-white/80 hover:text-white text-sm font-medium transition-colors relative group",
              activeProps: { className: "text-white" },
              activeOptions: { exact: link.to === "/" },
              children: [
                link.label,
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00D4C8] group-hover:w-full transition-all duration-300" })
              ]
            },
            link.to
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors",
              children: "Free Website Audit"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }) }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-[#003330] border-t border-white/10", children: /* @__PURE__ */ jsxs("nav", { className: "px-4 py-4 space-y-1", children: [
          navLinks.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              to: link.to,
              className: "block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors",
              activeProps: { className: "block px-4 py-3 text-white bg-white/10 rounded-lg text-sm font-medium" },
              activeOptions: { exact: link.to === "/" },
              children: link.label
            },
            link.to
          )),
          /* @__PURE__ */ jsx("div", { className: "pt-3 pb-1", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "block w-full text-center bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-3 rounded-lg transition-colors",
              children: "Free Website Audit"
            }
          ) })
        ] }) })
      ]
    }
  );
}
const services = [
  "Restaurant Website Development",
  "AI Automation",
  "Local SEO",
  "Google Business Profile Optimization",
  "Online Ordering Systems",
  "Lead Generation"
];
const pages = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#002E2C] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-lg", children: "O" }),
          /* @__PURE__ */ jsxs("span", { className: "text-white font-bold text-lg tracking-tight", children: [
            "Orivanta ",
            /* @__PURE__ */ jsx("span", { className: "text-[#00D4C8]", children: "Labs" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed mb-6", children: "Building growth systems for local businesses through modern websites, AI automation, and local SEO." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-white/60 text-sm", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "text-[#00D4C8]" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:hello@orivanta.com", className: "hover:text-white transition-colors", children: "hello@orivanta.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-white/60 text-sm", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "text-[#00D4C8]" }),
            /* @__PURE__ */ jsx("span", { children: "Available on contact" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-4 tracking-wide uppercase", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-white/60 hover:text-[#00D4C8] text-sm transition-colors", children: s }) }, s)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-4 tracking-wide uppercase", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: pages.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: p.to, className: "text-white/60 hover:text-[#00D4C8] text-sm transition-colors", children: p.label }) }, p.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-4 tracking-wide uppercase", children: "Ready to Grow?" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm mb-5", children: "Get a free audit of your current online presence and discover what's holding your business back." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "inline-block bg-[#00D4C8] hover:bg-[#00F5E9] text-[#004B49] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors",
            children: "Get Free Audit"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-white/40 text-sm", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Orivanta Labs. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 text-sm", children: "Building Growth Systems for Local Businesses" })
    ] })
  ] }) });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orivanta Labs — Building Growth Systems for Local Businesses" },
      { name: "description", content: "We help restaurants and local businesses increase online orders, bookings, and customer engagement with modern websites, AI automation, and local SEO." },
      { name: "theme-color", content: "#004B49" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-white text-gray-900", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      children,
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$5 = () => import("./services-y6J2NwWr.js");
const Route$5 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Services — Orivanta Labs"
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./portfolio-CucQshoT.js");
const Route$4 = createFileRoute("/portfolio")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Website Redesign Concepts — Orivanta Labs"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./contact-CMtxVyx3.js");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Contact — Orivanta Labs"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./about-TJoOBZX4.js");
const Route$2 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "About — Orivanta Labs"
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./index-Bw33MVqx.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/placeholder.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    shortDescription: "A generic product description for your first product.",
    price: 3e3
  }
];
const $$splitComponentImporter = () => import("./_productId-B_iVXxMG.js");
const Route = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((product2) => product2.id === +params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const PortfolioRoute = Route$4.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ProductsProductIdRoute = Route.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  ProductsProductIdRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
