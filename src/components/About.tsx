
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const TerminalLine = ({ delay, children }: { delay: number, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Behind the Terminal</h2>
          <p className="text-gray-400 text-lg">The person behind the pseudonym.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Hey, I'm GeekSec.</h3>
            
            <p>
              I've been writing Python since 10th grade and gradually transitioned into offensive security. Today my primary interests are penetration testing, bug bounty hunting, and building open-source security tools.
            </p>
            <p>
              I enjoy automating reconnaissance, analyzing web applications, and creating tooling that simplifies security workflows for researchers and defenders.
            </p>
            <p>
              My workflow revolves around Linux, Python, Burp Suite, and a growing arsenal of offensive security tools. Every project I build aims to solve real-world security challenges.
            </p>

            <div className="mt-8 glass-card p-6 border-l-4 border-l-accent flex gap-4 items-start">
              <Target className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold mb-2">Current Mission:</h4>
                <p className="text-sm text-gray-300">Finding vulnerabilities, building defenses, and securing the web—one bug at a time.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card overflow-hidden shadow-2xl"
          >
            <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs text-gray-500 ml-2 font-mono">geeksec@portfolio:~$</span>
            </div>
            
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 overflow-x-auto whitespace-pre-wrap">
              <TerminalLine delay={0.2}>
                <span className="text-accent">❯</span> cat /etc/passwd | grep geeksec
              </TerminalLine>
              <TerminalLine delay={0.4}>
                <span className="text-gray-300">geeksec:x:1000:1000::/home/geeksec:/bin/bash</span>
              </TerminalLine>

              <TerminalLine delay={1.2}>
                <span className="text-accent">❯</span> uname -a
              </TerminalLine>
              <TerminalLine delay={1.4}>
                <span className="text-gray-300">Linux hackerbox 6.8.0 x86_64 GNU/Linux</span>
              </TerminalLine>

              <TerminalLine delay={2.2}>
                <span className="text-accent">❯</span> ./skills --list
              </TerminalLine>
              <TerminalLine delay={2.4}>
                <span className="text-gray-400">
                  <span className="text-accent">[+]</span> Python<br/>
                  <span className="text-accent">[+]</span> Web Pentesting<br/>
                  <span className="text-accent">[+]</span> Network Analysis<br/>
                  <span className="text-accent">[+]</span> Reverse Engineering<br/>
                  <span className="text-accent">[+]</span> Bug Bounty Hunting
                </span>
              </TerminalLine>

              <TerminalLine delay={3.5}>
                <span className="text-accent">❯</span> echo $STATUS
              </TerminalLine>
              <TerminalLine delay={3.7}>
                <span className="text-gray-300">
                  Building tools.<br/>
                  Finding bugs.<br/>
                  Breaking things (legally).
                </span>
              </TerminalLine>

              <TerminalLine delay={4.5}>
                <span className="text-accent">❯</span> <span className="inline-block w-2 sm:w-2.5 h-3 sm:h-4 bg-gray-400 animate-pulse align-middle"></span>
              </TerminalLine>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
