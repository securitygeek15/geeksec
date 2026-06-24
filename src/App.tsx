import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";
import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const BUG_ICON =
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>;

const GITHUB_ICON =
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>;

const LINKEDIN_ICON =
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>;

const PROJECTS = [
  {
    name: "METAX",
    desc: "Advanced metadata extractor supporting multiple file formats. Extract, parse, and analyze metadata across documents, images, and media files.",
    url: "https://github.com/securitygeek15/METAX.git",
    tags: ["Python", "Forensics"],
  },
  {
    name: "SubZer0",
    desc: "High-performance subdomain scanner built for bug bounty recon. Recursive enumeration designed for speed at scale during the reconnaissance phase.",
    url: "https://github.com/securitygeek15/SubZer0.git",
    tags: ["Python", "Recon"],
  },
  {
    name: "WordSmithX",
    desc: "Generate thousands of unique text variations from a single input. Built for fuzzing, payload generation, and content mutation in security testing.",
    url: "https://github.com/securitygeek15/WordSmithX.git",
    tags: ["Python", "Fuzzing"],
  },
  {
    name: "ANAT",
    desc: "Lightweight intrusion detection system that captures network traffic, detects suspicious activity, and visualizes alerts in real-time.",
    url: "https://github.com/securitygeek15/ANAT.git",
    tags: ["Python", "Network"],
  },
];

const TAG_COLORS: Record<string, string> = {
  Python: "text-blue-300 border-blue-400/20 bg-blue-400/5",
  Forensics: "text-purple-300 border-purple-400/20 bg-purple-400/5",
  Recon: "text-cyan-300 border-cyan-400/20 bg-cyan-400/5",
  Fuzzing: "text-orange-300 border-orange-400/20 bg-orange-400/5",
  Network: "text-green-300 border-green-400/20 bg-green-400/5",
};

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    icon:
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
    items: ["Python", "JavaScript", "TypeScript", "Bash", "HTML/CSS", "SQL", "Go"],
  },
  {
    label: "Security Tools",
    icon:
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
    items: [
      "BurpSuite", "Nmap", "Wireshark", "Metasploit", "John the Ripper",
      "Hydra", "Hashcat", "Aircrack-ng", "Gobuster", "Netcat",
      "Nikto", "Responder", "SQLmap", "Dirb", "ffuf",
      "Recon-ng", "Searchsploit", "Bettercap", "LinPEAS", "Evil-WinRM",
      "BloodHound", "Zeek", "Impacket", "Mimikatz",
    ],
  },
  {
    label: "Platforms & Concepts",
    icon:
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>,
    items: ["Kali Linux", "Active Directory", "AWS", "OWASP Top 10", "OSINT", "Docker", "CI/CD", "HackerOne", "Intigriti"],
  },
];

function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main id="home" className="w-full bg-[#050505]">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
            }} />
          </div>

          <div className="light x1" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }} />
          <div className="light x2" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }} />
          <div className="light x3" style={{ boxShadow: '#00ff41 0px 0px 20px 2px' }} />
          <div className="light x4" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }} />
          <div className="light x5" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }} />
          <div className="light x6" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }} />
          <div className="light x7" style={{ boxShadow: '#00ff41 0px 0px 20px 2px' }} />
          <div className="light x8" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }} />
          <div className="light x9" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }} />

          <div className="relative z-10 w-full">
            <div className="max-w-screen-xl mx-auto px-5 py-12 md:py-20">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2.5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full mb-6 reveal">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] tracking-[3px] text-cyan-400/80 uppercase font-medium">
                      Open for opportunities
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-5 reveal">
                    <span className="glitch-text" data-text="GeekSec">GeekSec</span>
                    <br />
                    <span className="gradient-text">Ethical Hacker</span>
                  </h1>

                  <p className="flex items-center gap-2 text-lg md:text-xl text-gray-400 mb-8 reveal">
                    <span className="text-cyan-400 font-medium">$</span>
                    <span id="dynamicWords" className="typing-cursor" />
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10 reveal">
                    {[
                      { value: "4+", label: "Projects", color: "text-cyan-400" },
                      { value: "Python", label: "Primary Language", color: "text-purple-400" },
                      { value: "Bug Bounty", label: "Active Hunter", color: "text-green-400" },
                    ].map((s) => (
                      <div key={s.label} className="px-5 py-3 border border-white/[0.06] rounded-xl bg-white/[0.02] min-w-[120px]">
                        <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-[10px] text-gray-600 tracking-widest uppercase mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 reveal">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-cyber-dark font-semibold rounded-lg text-sm transition-all duration-200 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30"
                    >
                      View Projects
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-cyan-400/30 text-gray-300 hover:text-cyan-400 font-medium rounded-lg text-sm transition-all duration-200"
                    >
                      {GITHUB_ICON}
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div
                    id="hacker-logo"
                    className="relative"
                    style={{ opacity: 0, transform: 'translate3d(40px, 20px, 0) rotate(4deg)' }}
                  >
                    <div className="relative">
                      <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                        <img src="./assets/images/logo.jpg" alt="GeekSec" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 bg-[#050505]/80 backdrop-blur-md border border-white/[0.06] rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] text-green-400/80 font-medium tracking-wider">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="max-w-screen-xl mx-auto px-5 relative z-10">
            <div className="section-header reveal">
              <span className="section-label">Projects</span>
              <h2 className="section-title">Open Source Work</h2>
              <div className="section-divider" />
              <p className="section-sub">Security tools I've built and maintain</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {PROJECTS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card reveal group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className={`tag ${TAG_COLORS[t] || "text-gray-400 border-white/10 bg-white/5"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {p.name}
                    <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">→</span>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-green-400/70" />
                    Active development
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="arsenal" className="py-20 md:py-28 border-t border-white/[0.04] relative">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-screen-xl mx-auto px-5 relative z-10">
            <div className="section-header reveal">
              <span className="section-label">Skills & Tools</span>
              <h2 className="section-title">The Arsenal</h2>
              <div className="section-divider" />
              <p className="section-sub">Technologies and tools I work with daily</p>
            </div>

            <div className="space-y-10">
              {SKILL_CATEGORIES.map((cat, ci) => (
                <div key={cat.label} className="reveal" style={{ transitionDelay: `${ci * 120}ms` }}>
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.04]">
                    <span className="text-cyan-400">{cat.icon}</span>
                    <h3 className="text-xs tracking-[3px] text-gray-500 uppercase font-semibold">{cat.label}</h3>
                    <span className="text-[10px] text-gray-600">({cat.items.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="skill-chip group/chip">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/30 group-hover/chip:bg-cyan-400 transition-colors duration-200" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="max-w-screen-xl mx-auto px-5 relative z-10">
            <div className="section-header reveal">
              <span className="section-label">About</span>
              <h2 className="section-title">Behind the Terminal</h2>
              <div className="section-divider" />
              <p className="section-sub">The person behind the pseudonym</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
              <div className="reveal">
                <h3 className="text-2xl font-bold text-white mb-5">
                  Hey, I'm <span className="gradient-text">GeekSec</span>
                </h3>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p>
                    I've been writing code since 10th grade — starting with Python and diving headfirst into
                    cybersecurity. Today, I specialize in ethical hacking, penetration testing, and bug bounty hunting.
                  </p>
                  <p>
                    My workflow revolves around Linux, Python, and a growing arsenal of security tools.
                    I break things to understand them, then build tools that make the internet a little safer.
                  </p>
                  <p>
                    Currently focused on bug bounty hunting, building open-source security tools, and contributing
                    to the cybersecurity community. Every system has a vulnerability — I find them before the bad guys do.
                  </p>
                </div>

                <div className="mt-6 p-4 border border-cyan-400/10 bg-cyan-400/[0.02] rounded-xl">
                  <div className="flex items-start gap-3">
                    {BUG_ICON}
                    <div>
                      <p className="text-sm font-semibold text-cyan-400">Current Mission</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Finding vulnerabilities, building defenses, and securing the web — one bug at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500/80" />
                    <div className="terminal-dot bg-yellow-500/80" />
                    <div className="terminal-dot bg-green-500/80" />
                    <span className="text-xs text-gray-600 ml-2 font-medium">geeksec@portfolio:~$</span>
                  </div>
                  <div className="p-5 text-sm font-mono space-y-2">
                    <div><span className="text-pink-400">❯</span> <span className="text-gray-200">cat /etc/passwd | grep geeksec</span></div>
                    <div className="text-green-400/80 pl-4">geeksec:x:1000:1000::/home/geeksec:/bin/bash</div>
                    <div><span className="text-pink-400">❯</span> <span className="text-gray-200">uname -a</span></div>
                    <div className="text-gray-500 pl-4">Linux hackerbox 6.8.0-arch1-1 #1 x86_64 GNU/Linux</div>
                    <div><span className="text-pink-400">❯</span> <span className="text-gray-200">./skills --list</span></div>
                    <div className="text-cyan-400/80 pl-4">[+] Python · JavaScript · BurpSuite · Nmap · Wireshark</div>
                    <div className="text-cyan-400/80 pl-4">[+] Web Pentesting · Network Analysis · Reverse Engineering</div>
                    <div><span className="text-pink-400">❯</span> <span className="text-gray-200">echo $STATUS</span></div>
                    <div className="text-green-400/80 pl-4">Hunting bugs · Building tools · Breaking stuff (legally)</div>
                    <div>
                      <span className="text-pink-400">❯</span>
                      <span className="text-gray-200 animate-pulse"> ▊</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="py-20 md:py-28 border-t border-white/[0.04] relative">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-screen-xl mx-auto px-5 relative z-10">
            <div className="section-header reveal">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Get in Touch</h2>
              <div className="section-divider" />
              <p className="section-sub">Let's build something — responsibly</p>
            </div>

            <div className="max-w-lg mx-auto reveal">
              <div className="glass-card p-8 md:p-10 text-center relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Let's work together
                </h3>
                <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
                  Whether you have a bug bounty program, a security project, or just want to talk infosec —
                  I'd love to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                  <a
                    href="mailto:amaankhan12e4@gmail.com"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-cyber-dark font-semibold rounded-lg text-sm transition-all duration-200 shadow-lg shadow-cyan-400/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send an Email
                  </a>
                  <a
                    href="https://github.com/securitygeek15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/10 hover:border-cyan-400/30 text-gray-300 hover:text-cyan-400 font-medium rounded-lg text-sm transition-all duration-200"
                  >
                    {GITHUB_ICON}
                    GitHub
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <a href="https://github.com/securitygeek15" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    {GITHUB_ICON}
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    {LINKEDIN_ICON}
                  </a>
                  <a href="mailto:amaankhan12e4@gmail.com" className="social-icon" aria-label="Email">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
