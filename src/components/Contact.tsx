import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bug } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-header', 
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

      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { scale: 0.9, opacity: 0, y: 50 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
            }
          }
        );

        // Stagger inner elements of the card
        gsap.fromTo(cardRef.current.querySelectorAll('.contact-element'),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-24 relative bg-white/40 border-t border-gray-200 backdrop-blur-md" ref={containerRef}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="contact-header mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">Get in Touch</h2>
          <p className="text-gray-600 text-lg">Let's build something—responsibly.</p>
        </div>

        <div
          ref={cardRef}
          className="glass-card p-8 md:p-12 relative overflow-hidden shadow-xl border-gray-200"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-sm"></div>
          
          <p className="contact-element text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you have a bug bounty program, a penetration testing engagement, an open-source collaboration, or simply want to discuss cybersecurity, I'd be happy to connect.
          </p>

          <div className="contact-element flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(79,70,229,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:amaankhan12e4@gmail.com" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-bold transition-all shadow-md"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/securitygeek15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 border border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-bold transition-all shadow-sm"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>

          <div className="contact-element flex items-center justify-center gap-6">
            {[
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Bug, label: 'HackerOne', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5, color: '#4F46E5', backgroundColor: 'rgba(79,70,229,0.1)' }}
                href={social.href} 
                className="p-3 bg-gray-50 border border-gray-200 hover:border-accent/30 rounded-full text-gray-500 transition-colors shadow-sm" 
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
