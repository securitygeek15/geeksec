import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Server } from 'lucide-react';

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
  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Arsenal</h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with daily.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 border-t-2 border-t-accent/20"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <category.icon className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/30 text-gray-300 hover:text-accent transition-colors rounded-lg cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
