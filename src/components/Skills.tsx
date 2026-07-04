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
    <section id="skills" className="py-24 relative bg-black/60 backdrop-blur-sm border-y border-white/5" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="skills-header mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">The Arsenal</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with daily.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              ref={(el) => (categoriesRef.current[i] = el)}
              className="glass-card p-6 md:p-8 border-t-2 border-t-accent/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.1)] transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <category.icon className="w-6 h-6 text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(34,197,94,0.2)', borderColor: 'rgba(34,197,94,0.5)', color: '#fff' }}
                    className="skill-badge px-3 py-1.5 text-sm bg-white/5 border border-white/10 text-gray-300 transition-colors rounded-lg cursor-default shadow-sm"
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
