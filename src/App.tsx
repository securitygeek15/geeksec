import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";

function App() {
  return (
    <>
      <Nav />
      <main id="home" className="w-full bg-cyber-dark">

        {/* Floater particles */}
        <div className="light x1" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }}></div>
        <div className="light x2" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }}></div>
        <div className="light x3" style={{ boxShadow: '#00ff41 0px 0px 20px 2px' }}></div>
        <div className="light x4" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }}></div>
        <div className="light x5" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }}></div>
        <div className="light x6" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }}></div>
        <div className="light x7" style={{ boxShadow: '#00ff41 0px 0px 20px 2px' }}></div>
        <div className="light x8" style={{ boxShadow: '#ff0080 0px 0px 20px 2px' }}></div>
        <div className="light x9" style={{ boxShadow: '#00e5ff 0px 0px 20px 2px' }}></div>

        {/* ===== HERO ===== */}
        <section className="pt-24 md:pt-0 bg-cyber-dark min-h-screen flex items-center">
          <div className="grid max-w-screen-xl px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10 w-full">
            <div className="place-self-center lg:col-span-7 lg:order-1 order-2">
              <div className="inline-flex items-center gap-2 border border-cyber-cyan/30 px-3 md:px-4 py-1.5 mb-5 md:mb-6">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
                <span className="text-[10px] md:text-xs tracking-[3px] text-cyber-cyan uppercase">System::Active</span>
              </div>

              <h1 className="max-w-2xl mb-4 text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none text-white">
                <span className="glitch-text" data-text="GeekSec">GeekSec</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-purple-400 to-cyber-magenta">
                  Ethical Hacker
                </span>
              </h1>

              <div className="flex items-center gap-2 mb-5 md:mb-6">
                <span className="text-cyber-cyan text-xl md:text-2xl font-bold">&gt;</span>
                <span id="dynamicWords" className="text-gray-400 text-lg md:text-2xl"></span>
              </div>

              <div className="flex gap-3 md:gap-4 mb-8 flex-wrap">
                <div className="text-center px-4 md:px-6 py-2 md:py-3 border border-cyber-border rounded flex-1 md:flex-none">
                  <div className="text-xl md:text-2xl font-bold text-cyber-cyan">4+</div>
                  <div className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">Projects</div>
                </div>
                <div className="text-center px-4 md:px-6 py-2 md:py-3 border border-cyber-border rounded flex-1 md:flex-none">
                  <div className="text-xl md:text-2xl font-bold text-cyber-magenta">Python</div>
                  <div className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">Main Lang</div>
                </div>
                <div className="text-center px-4 md:px-6 py-2 md:py-3 border border-cyber-border rounded flex-1 md:flex-none">
                  <div className="text-xl md:text-2xl font-bold text-cyber-cyan">Bug</div>
                  <div className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">Hunter</div>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold text-cyber-dark bg-cyber-cyan hover:bg-cyber-cyan/90 transition-all duration-300"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold text-cyber-cyan border border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex lg:mt-0 lg:col-span-5 lg:order-2 order-1 relative z-10 items-center justify-center mb-8 lg:mb-0">
              <div
                id="hacker-logo"
                className="relative"
                style={{ opacity: 0, transform: 'translate3d(50px, 20px, 0) rotate(5deg)' }}
              >
                <div className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-2 border-cyber-cyan/30 overflow-hidden bg-cyber-dark/50 backdrop-blur-sm">
                  <img src="./assets/images/logo.jpg" alt="GeekSec" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-cyber-magenta/30 rounded-full flex items-center justify-center text-cyber-magenta text-[8px] md:text-xs tracking-widest animate-pulse">
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="py-16 md:py-20 bg-cyber-dark">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-xs tracking-[4px] text-cyber-cyan uppercase mb-3">// Projects</h2>
              <div className="w-12 md:w-16 h-0.5 bg-cyber-cyan mx-auto mb-4" style={{ boxShadow: '0 0 10px #00e5ff' }}></div>
              <p className="text-gray-600 text-xs md:text-sm">public repositories</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* METAX */}
              <a href="https://github.com/securitygeek15/METAX.git" target="_blank" rel="noopener noreferrer" className="block project-card relative">
                <span className="inline-block text-xs tracking-[2px] text-blue-400 border border-blue-400/30 px-3 py-1 rounded mb-4">Python</span>
                <h3 className="text-xl font-bold text-white mb-3">METAX</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Advanced Meta Data Extractor supporting various file extensions and formats. Extract, parse, and analyze metadata across documents, images, and media files.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                  Public &middot; Active
                </div>
              </a>

              {/* SubZer0 */}
              <a href="https://github.com/securitygeek15/SubZer0.git" target="_blank" rel="noopener noreferrer" className="block project-card relative">
                <span className="inline-block text-xs tracking-[2px] text-blue-400 border border-blue-400/30 px-3 py-1 rounded mb-4">Python</span>
                <h3 className="text-xl font-bold text-white mb-3">SubZer0</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  CLI tool for scanning subdomains. Built for speed — recursive enumeration designed for the recon phase of bug bounty hunting.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                  Public &middot; Active
                </div>
              </a>

              {/* WordSmithX */}
              <a href="https://github.com/securitygeek15/WordSmithX.git" target="_blank" rel="noopener noreferrer" className="block project-card relative">
                <span className="inline-block text-xs tracking-[2px] text-blue-400 border border-blue-400/30 px-3 py-1 rounded mb-4">Python</span>
                <h3 className="text-xl font-bold text-white mb-3">WordSmithX</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Generate thousands of unique text variations from a single input. Built for fuzzing, payload generation, and content mutation in security testing.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                  Public &middot; Active
                </div>
              </a>

              {/* ANAT */}
              <a href="https://github.com/securitygeek15/ANAT.git" target="_blank" rel="noopener noreferrer" className="block project-card relative">
                <span className="inline-block text-xs tracking-[2px] text-blue-400 border border-blue-400/30 px-3 py-1 rounded mb-4">Python</span>
                <h3 className="text-xl font-bold text-white mb-3">ANAT</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Lightweight Intrusion Detection System. Captures network traffic, detects suspicious activity, and visualizes alerts in real-time.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                  Public &middot; Active
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===== ARSENAL ===== */}
        <section id="arsenal" className="py-16 md:py-20 bg-cyber-dark border-t border-cyber-border">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-xs tracking-[4px] text-cyber-cyan uppercase mb-3">// Arsenal</h2>
              <div className="w-12 md:w-16 h-0.5 bg-cyber-cyan mx-auto mb-4" style={{ boxShadow: '0 0 10px #00e5ff' }}></div>
              <p className="text-gray-600 text-xs md:text-sm">tools of the trade</p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs tracking-[3px] text-gray-500 uppercase mb-5 border-b border-cyber-border pb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'TypeScript', 'Bash', 'HTML/CSS', 'SQL', 'Go'].map(lang => (
                  <div key={lang} className="skill-chip">{lang}</div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xs tracking-[3px] text-gray-500 uppercase mb-5 border-b border-cyber-border pb-3">Pentesting</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'BurpSuite', 'Nmap', 'Wireshark', 'Metasploit', 'John the Ripper',
                  'Hydra', 'Hashcat', 'Aircrack-ng', 'Gobuster', 'Netcat',
                  'Nikto', 'Responder', 'SQLmap', 'Dirb', 'ffuf',
                  'Recon-ng', 'Searchsploit', 'Bettercap', 'LinPEAS', 'Evil-WinRM',
                  'BloodHound', 'Zeek', 'Impacket', 'Mimikatz'
                ].map(tool => (
                  <div key={tool} className="skill-chip">{tool}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[3px] text-gray-500 uppercase mb-5 border-b border-cyber-border pb-3">Platforms & Concepts</h3>
              <div className="flex flex-wrap gap-3">
                {['Kali Linux', 'Active Directory', 'AWS', 'OWASP Top 10', 'OSINT', 'Docker', 'CI/CD', 'HackerOne', 'Intigriti'].map(p => (
                  <div key={p} className="skill-chip">{p}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-16 md:py-20 bg-cyber-dark">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-xs tracking-[4px] text-cyber-cyan uppercase mb-3">// About</h2>
              <div className="w-12 md:w-16 h-0.5 bg-cyber-cyan mx-auto mb-4" style={{ boxShadow: '0 0 10px #00e5ff' }}></div>
              <p className="text-gray-600 text-xs md:text-sm">$ whoami</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h3 className="text-3xl font-bold text-white mb-5">
                  Hey, I'm <span className="text-cyber-cyan">GeekSec</span>
                </h3>
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Been coding since 10th standard — started with Python and never looked back. 
                    Now I'm deep in the world of ethical hacking, penetration testing, and bug bounty hunting.
                  </p>
                  <p>
                    I breathe Linux, speak in Python, and dream in shell commands. Whether it's breaking 
                    things apart to understand how they work or building tools that make the internet safer 
                    — that's where I live.
                  </p>
                  <p>
                    Currently hunting bugs, building security tools, and contributing to open-source 
                    cybersecurity projects. Every system has a weakness — I find them before the bad guys do.
                  </p>
                </div>
                <div className="mt-6 border-l-2 border-cyber-cyan pl-4 text-cyber-cyan text-sm">
                  # root@geeksec ~ $ engage_threats --mode="responsible"
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-gray-600 ml-2">geeksec@portfolio:~$</span>
                </div>
                <div className="p-5 text-sm font-mono text-cyber-cyan space-y-2">
                  <div><span className="text-cyber-magenta">❯</span> <span className="text-white">cat /etc/passwd | grep geeksec</span></div>
                  <div className="text-cyber-green pl-4">geeksec:x:1000:1000::/home/geeksec:/bin/bash</div>
                  <div><span className="text-cyber-magenta">❯</span> <span className="text-white">uname -a</span></div>
                  <div className="text-gray-500 pl-4">Linux hackerbox 6.8.0-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux</div>
                  <div><span className="text-cyber-magenta">❯</span> <span className="text-white">./skills --list</span></div>
                  <div className="text-cyber-cyan pl-4">[+] Python · JavaScript · BurpSuite · Nmap · Wireshark · Metasploit</div>
                  <div className="text-cyber-cyan pl-4">[+] Web Pentesting · Network Analysis · Reverse Engineering</div>
                  <div><span className="text-cyber-magenta">❯</span> <span className="text-white">echo $STATUS</span></div>
                  <div className="text-cyber-green pl-4">Actively hunting bugs · Building tools · Breaking stuff (legally)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="py-16 md:py-20 bg-cyber-dark border-t border-cyber-border">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[10px] md:text-xs tracking-[4px] text-cyber-cyan uppercase mb-3">// Connect</h2>
              <div className="w-12 md:w-16 h-0.5 bg-cyber-cyan mx-auto mb-4" style={{ boxShadow: '0 0 10px #00e5ff' }}></div>
              <p className="text-gray-600 text-xs md:text-sm">get in touch</p>
            </div>

            <div className="max-w-lg mx-auto bg-cyber-surface border border-cyber-border rounded-xl p-6 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's break things — <span className="text-cyber-cyan">responsibly</span>.
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Got a bug bounty program? Found something interesting? Or just wanna talk infosec? Hit me up.
              </p>
              <a
                href="mailto:amaankhan12e4@gmail.com"
                className="inline-block px-8 py-3 text-sm font-bold text-cyber-dark bg-cyber-cyan hover:bg-cyber-cyan/90 transition-all duration-300"
              >
                [ send@signal ]
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default App;
