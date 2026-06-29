import { motion } from 'framer-motion';
import { FolderCode } from 'lucide-react';
import { useEffect, useState } from 'react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    timeoutId = setTimeout(() => {
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
      {isTyping && <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300">Open for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            GeekSec
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-6">
            <span className="text-accent">Ethical Hacker</span> <br className="md:hidden" />
            <span className="hidden md:inline"> • </span> 
            Penetration Tester • Bug Bounty Hunter
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            Building offensive security tools with Python, discovering vulnerabilities through responsible disclosure, and contributing to open-source cybersecurity.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { label: '4+', sub: 'Open Source Projects' },
              { label: 'Python', sub: 'Primary Language' },
              { label: 'Bug Bounty', sub: 'Active Hunter' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="glass-card px-5 py-3 min-w-[140px]"
              >
                <div className="text-xl font-bold text-accent">{stat.label}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-lg font-semibold transition-colors">
              <FolderCode className="w-5 h-5" />
              View Projects
            </a>
            <a href="https://github.com/securitygeek15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          <div className="glass-card overflow-hidden border-accent/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs text-gray-500 ml-2 font-mono">bash - 80x24</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-3">
              <div>
                <span className="text-accent">geeksec@portfolio:~$</span>{' '}
                <TypewriterText text="whoami" delay={1000} />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-gray-300"
              >
                GeekSec
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              >
                <span className="text-accent">geeksec@portfolio:~$</span>{' '}
                <TypewriterText text="echo $MISSION" delay={2200} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                className="text-gray-300 space-y-1"
              >
                <div>Finding vulnerabilities.</div>
                <div>Building defenses.</div>
                <div>Securing the web.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
              >
                <span className="text-accent">geeksec@portfolio:~$</span>{' '}
                <span className="inline-block w-2.5 h-4 bg-gray-400 animate-pulse align-middle ml-1"></span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
