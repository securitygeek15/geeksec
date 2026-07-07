import { motion } from 'framer-motion';
import { FolderCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import AIParticles from './AIParticles';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {isTyping && <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-gray-400" />}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:pt-20">
      <div className="grid-bg absolute inset-0 opacity-20"></div>
      
      {/* AI Particles Background */}
      <AIParticles />
      
      {/* Background glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px] md:size-[600px] md:blur-[150px]"
      />

      <div className="z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-2">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 shadow-sm backdrop-blur-md"
          >
            <span className="size-2 animate-pulse rounded-full bg-accent shadow-[0_0_10px_rgba(79,70,229,0.5)]"></span>
            <span className="text-xs font-medium text-gray-700">Open for opportunities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-4xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl"
          >
            GeekSec
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-xl font-medium text-gray-600 sm:text-2xl md:text-3xl"
          >
            <span className="text-accent drop-shadow-sm">Ethical Hacker</span> <br className="md:hidden" />
            <span className="hidden md:inline"> • </span> 
            Penetration Tester • Bug Bounty Hunter
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Building offensive security tools with Python, discovering vulnerabilities through responsible disclosure, and contributing to open-source cybersecurity.
          </motion.p>

          <div className="mb-10 flex flex-wrap gap-4">
            {[
              { label: '4+', sub: 'Open Source Projects' },
              { label: 'Python', sub: 'Primary Language' },
              { label: 'Bug Bounty', sub: 'Active Hunter' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(79,70,229,0.3)" }}
                transition={{ delay: 0.6 + (i * 0.1), type: "spring", stiffness: 200 }}
                className="glass-card min-w-[140px] cursor-pointer px-5 py-3"
              >
                <div className="text-xl font-bold text-accent">{stat.label}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(79,70,229,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-md transition-all"
            >
              <FolderCode className="size-5" />
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/securitygeek15" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-6 py-3 font-semibold text-gray-900 shadow-sm backdrop-blur-md transition-all"
            >
              <Github className="size-5" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          className="perspective-1000 relative mt-8 w-full max-w-lg lg:ml-auto lg:mt-0"
        >
          <div className="glass-card overflow-hidden border-gray-200 bg-white/95 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2">
              <div className="size-3 rounded-full bg-red-400"></div>
              <div className="size-3 rounded-full bg-yellow-400"></div>
              <div className="size-3 rounded-full bg-green-400"></div>
              <span className="ml-2 flex-1 pr-8 text-center font-mono text-xs text-gray-500">bash - 80x24</span>
            </div>
            <div className="space-y-3 overflow-x-auto whitespace-pre-wrap p-4 font-mono text-xs text-gray-800 sm:p-5 sm:text-sm">
              <div>
                <span className="font-bold text-accent">geeksec@portfolio:~$</span>{' '}
                <TypewriterText text="whoami" delay={1200} />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="font-bold text-gray-900"
              >
                GeekSec
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
              >
                <span className="font-bold text-accent">geeksec@portfolio:~$</span>{' '}
                <TypewriterText text="echo $MISSION" delay={2500} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6 }}
                className="space-y-1 text-gray-700"
              >
                <div>Finding vulnerabilities.</div>
                <div>Building defenses.</div>
                <div>Securing the web.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0 }}
              >
                <span className="font-bold text-accent">geeksec@portfolio:~$</span>{' '}
                <span className="ml-1 inline-block h-3 w-2 animate-pulse bg-gray-400 align-middle sm:h-4 sm:w-2.5"></span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
