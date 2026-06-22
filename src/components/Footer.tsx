import { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-[9999] p-3 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan transition-all duration-300 hover:bg-cyber-cyan/20 focus:ring-4 focus:ring-cyber-cyan/20 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <footer className="bg-cyber-dark py-4 border-t border-cyber-border">
        <div className="max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-600 sm:text-center dark:text-gray-500">
            &copy; {new Date().getFullYear()} <span className="text-cyber-cyan">GeekSec</span>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-500 sm:mt-0">
            <li className="mr-4">
              <span className="text-cyber-cyan">$</span> secure_the_internet
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
