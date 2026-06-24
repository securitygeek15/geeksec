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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cyber-dark/85 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <img
              src="./assets/images/logo.jpg"
              alt=""
              className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-300"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full ring-2 ring-cyber-dark animate-pulse" />
          </div>
          <span className="text-white font-bold text-base md:text-lg tracking-tight">
            <span className="text-cyan-400">~</span> GeekSec
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyber-dark bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1">
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-gray-400 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-4 pt-2 bg-cyber-dark/95 backdrop-blur-xl border-t border-white/5 space-y-1">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? "text-cyan-400 bg-cyan-400/5"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              {activeSection === id && <span className="text-cyan-400 mr-2">▸</span>}
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="w-full mt-2 px-4 py-3 text-sm font-semibold text-cyber-dark bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
