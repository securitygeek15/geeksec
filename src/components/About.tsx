import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TerminalLine = ({ delay, children, className }: { delay: number, children: React.ReactNode, className?: string }) => (
  <div className={`terminal-line opacity-0 transform translate-y-4 ${className || ''}`} data-delay={delay}>
    {children}
  </div>
);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.about-header', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Content text animation
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Terminal animation
      if (terminalRef.current) {
        gsap.fromTo(terminalRef.current,
          { scale: 0.95, opacity: 0, rotationX: 10 },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: terminalRef.current,
              start: 'top 85%',
            }
          }
        );

        // Terminal lines animation
        const lines = terminalRef.current.querySelectorAll('.terminal-line');
        lines.forEach((line) => {
          const delay = parseFloat(line.getAttribute('data-delay') || '0');
          gsap.to(line, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            delay: delay,
            ease: 'none',
            scrollTrigger: {
              trigger: terminalRef.current,
              start: 'top 80%',
            }
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="about-header mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Behind the Terminal</h2>
          <p className="text-gray-600 text-lg">The person behind the pseudonym.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div ref={contentRef} className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hey, I'm GeekSec.</h3>
            
            <p>
              I've been writing Python since 10th grade and gradually transitioned into offensive security. Today my primary interests are penetration testing, bug bounty hunting, and building open-source security tools.
            </p>
            <p>
              I enjoy automating reconnaissance, analyzing web applications, and creating tooling that simplifies security workflows for researchers and defenders.
            </p>
            <p>
              My workflow revolves around Linux, Python, Burp Suite, and a growing arsenal of offensive security tools. Every project I build aims to solve real-world security challenges.
            </p>

            <motion.div 
              whileHover={{ x: 5, backgroundColor: 'rgba(0,0,0,0.02)' }}
              className="mt-8 glass-card p-6 border-l-4 border-l-accent flex gap-4 items-start transition-all cursor-default shadow-sm"
            >
              <Target className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  Current Mission
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(79,70,229,0.5)]"></span>
                </h4>
                <p className="text-sm text-gray-600">Finding vulnerabilities, building defenses, and securing the web—one bug at a time.</p>
              </div>
            </motion.div>
          </div>

          <div ref={terminalRef} className="glass-card overflow-hidden shadow-xl border-gray-200 perspective-1000 bg-white/95">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-500 ml-2 font-mono flex-1 pr-14 text-center">geeksec@portfolio:~$</span>
            </div>
            
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 overflow-x-auto whitespace-pre-wrap">
              <TerminalLine delay={0.2}>
                <span className="text-accent font-bold">❯</span> <span className="text-gray-800">cat /etc/passwd | grep geeksec</span>
              </TerminalLine>
              <TerminalLine delay={0.4}>
                <span className="text-gray-600">geeksec:x:1000:1000::/home/geeksec:/bin/bash</span>
              </TerminalLine>

              <TerminalLine delay={1.2}>
                <span className="text-accent font-bold">❯</span> <span className="text-gray-800">uname -a</span>
              </TerminalLine>
              <TerminalLine delay={1.4}>
                <span className="text-gray-600">Linux hackerbox 6.8.0 x86_64 GNU/Linux</span>
              </TerminalLine>

              <TerminalLine delay={2.2}>
                <span className="text-accent font-bold">❯</span> <span className="text-gray-800">./skills --list</span>
              </TerminalLine>
              <TerminalLine delay={2.4}>
                <span className="text-gray-600">
                  <span className="text-accent">[+]</span> Python<br/>
                  <span className="text-accent">[+]</span> Web Pentesting<br/>
                  <span className="text-accent">[+]</span> Network Analysis<br/>
                  <span className="text-accent">[+]</span> Reverse Engineering<br/>
                  <span className="text-accent">[+]</span> Bug Bounty Hunting
                </span>
              </TerminalLine>

              <TerminalLine delay={3.5}>
                <span className="text-accent font-bold">❯</span> <span className="text-gray-800">echo $STATUS</span>
              </TerminalLine>
              <TerminalLine delay={3.7}>
                <span className="text-gray-600">
                  Building tools.<br/>
                  Finding bugs.<br/>
                  Breaking things (legally).
                </span>
              </TerminalLine>

              <TerminalLine delay={4.5}>
                <span className="text-accent font-bold">❯</span> <span className="inline-block w-2 sm:w-2.5 h-3 sm:h-4 bg-gray-400 animate-pulse align-middle"></span>
              </TerminalLine>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
