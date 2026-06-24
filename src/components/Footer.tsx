import { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 p-2.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-gray-500 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/[0.04] ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <footer className="border-t border-white/[0.04] relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-screen-xl mx-auto px-5 py-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()}
              <span className="text-cyan-400 font-medium mx-1">GeekSec</span>
              — Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-xs text-gray-600">
              <span className="text-green-400/70">$</span> echo "securing the web, one bug at a time"
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
