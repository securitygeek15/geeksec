import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Server } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Bash', 'SQL', 'HTML/CSS']
  },
  {
    title: 'Offensive Security',
    icon: Shield,
    skills: [
      'Burp Suite', 'Nmap', 'ffuf', 'SQLMap', 'Metasploit', 'BloodHound', 
      'Impacket', 'Mimikatz', 'Hydra', 'Hashcat', 'Gobuster', 'Responder', 
      'Nikto', 'Recon-ng', 'Searchsploit', 'Evil-WinRM', 'LinPEAS', 
      'John the Ripper', 'Aircrack-ng', 'Dirb', 'Bettercap'
    ]
  },
  {
    title: 'Networking',
    icon: Network,
    skills: ['Wireshark', 'Zeek', 'Netcat', 'Packet Analysis', 'Traffic Monitoring']
  },
  {
    title: 'Platforms & Concepts',
    icon: Server,
    skills: [
      'Linux', 'Active Directory', 'Docker', 'AWS', 'OWASP Top 10', 
      'OSINT', 'CI/CD', 'HackerOne', 'Intigriti'
    ]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-header', 
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

      categoriesRef.current.forEach((el) => {
        if (!el) return;
        
        gsap.fromTo(el,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );

        // Stagger individual skill badges inside the category
        const badges = el.querySelectorAll('.skill-badge');
        gsap.fromTo(badges,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="relative border-y border-gray-200 bg-white/40 py-24 backdrop-blur-sm" ref={containerRef}>
      {/* Background elements */}
      <div className="pointer-events-none absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="skills-header mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 drop-shadow-sm md:text-5xl">The Arsenal</h2>
          <p className="text-lg text-gray-600">Technologies and tools I work with daily.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              ref={(el) => (categoriesRef.current[i] = el)}
              className="glass-card border-t-2 border-t-accent/50 p-6 shadow-md transition-shadow duration-500 hover:shadow-xl md:p-8"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="rounded-lg border border-accent/10 bg-accent/5 p-2">
                  <category.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(79,70,229,0.1)', borderColor: 'rgba(79,70,229,0.3)', color: '#111827' }}
                    className="skill-badge cursor-default rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700 shadow-sm transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
