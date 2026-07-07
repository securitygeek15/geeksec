import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "arsenal" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map((i) => i.id);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cyber-dark/85 border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-5 md:h-20">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2.5"
        >
          <div className="relative">
            <img
              src="./assets/images/logo.jpg"
              alt=""
              className="size-8 rounded-full object-cover ring-2 ring-cyan-400/30 transition-all duration-300 group-hover:ring-cyan-400/60 md:size-9"
            />
            <span className="ring-cyber-dark absolute -bottom-0.5 -right-0.5 size-2.5 animate-pulse rounded-full bg-cyan-400 ring-2" />
          </div>
          <span className="text-base font-bold tracking-tight text-white md:text-lg">
            <span className="text-cyan-400">~</span> GeekSec
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {label}
              {activeSection === id && (
                <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="text-cyber-dark hidden items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:bg-cyan-300 hover:shadow-cyan-400/30 md:inline-flex"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex size-9 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-white/20 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-4 flex-col gap-1">
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`duration-400 overflow-hidden transition-all ease-in-out md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cyber-dark/95 space-y-1 border-t border-white/5 px-5 pb-4 pt-2 backdrop-blur-xl">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? "bg-cyan-400/5 text-cyan-400"
                  : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
              }`}
            >
              {activeSection === id && <span className="mr-2 text-cyan-400">▸</span>}
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-cyber-dark mt-2 w-full rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold transition-all hover:bg-cyan-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
