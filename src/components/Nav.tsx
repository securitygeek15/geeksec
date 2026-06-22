import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled ? 'py-2 bg-cyber-dark/95 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent md:bg-transparent'
      }`}
      fluid
    >
      <Navbar.Brand href="/">
        <img
          src="./assets/images/logo.jpg"
          className={`mr-2 rounded-full transition-all duration-300 ${
            isScrolled ? 'h-7 w-7' : 'h-9 w-9'
          }`}
          alt="GeekSec Logo"
        />
        <span className={`self-center whitespace-nowrap font-bold text-white transition-all duration-300 ${
          isScrolled ? 'text-lg' : 'text-2xl'
        }`}>
          <span className="text-cyber-cyan">&gt;</span> GeekSec
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={`text-white bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/30 hover:border-cyber-cyan font-bold text-center mx-3 md:mr-0 z-10 transition-all duration-300 ${
            isScrolled ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'
          }`}
        >
          Contact
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {[
          { label: 'Home', id: 'home' },
          { label: 'Projects', id: 'projects' },
          { label: 'Arsenal', id: 'arsenal' },
          { label: 'About', id: 'about' },
          { label: 'Contact', id: 'contact' },
        ].map(({ label, id }) => (
          <button 
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block pr-4 pl-3 border-b border-gray-800 text-gray-400 hover:bg-gray-900 font-bold dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-cyber-cyan md:border-0 md:hover:bg-transparent md:hover:text-cyber-cyan md:dark:hover:bg-transparent md:dark:hover:text-cyber-cyan transition-all duration-300 ${
              isScrolled ? 'text-base md:text-sm py-2' : 'text-xl md:text-base py-2.5'
            }`}
          >
            {label}
          </button>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
