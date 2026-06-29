import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const projects = [
  {
    name: 'METAX',
    category: 'Python • Forensics',
    description: 'Advanced metadata extraction framework supporting images, documents, audio, and video. Designed for forensic investigations, OSINT, and security analysis with structured output.',
    url: 'https://github.com/securitygeek15/METAX',
  },
  {
    name: 'SubZer0',
    category: 'Python • Recon',
    description: 'Recursive subdomain enumeration engine built for bug bounty reconnaissance. Designed for high-speed discovery and scalable automation.',
    url: 'https://github.com/securitygeek15/SubZer0',
  },
  {
    name: 'WordSmithX',
    category: 'Python • Fuzzing',
    description: 'Generate thousands of payload mutations from a single input. Useful for fuzzing, wordlist generation, and security testing automation.',
    url: 'https://github.com/securitygeek15/WordSmithX',
  },
  {
    name: 'ANAT',
    category: 'Python • Network Security',
    description: 'Lightweight intrusion detection system that captures network traffic, detects suspicious behavior, and visualizes alerts in real time.',
    url: 'https://github.com/securitygeek15/ANAT',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Open Source Work</h2>
          <p className="text-gray-400 text-lg">Security tools I've built and actively maintain.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 glass-card-hover group block relative overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {project.category}
                  </span>
                  <Github className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                  {project.name}
                  <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Active Development
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
