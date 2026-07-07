export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-200 bg-background relative overflow-hidden">
      {/* Subtle grid background for footer */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-gray-500 text-sm">
            © {currentYear} GeekSec
          </div>

          <div className="font-mono text-xs text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
            <span className="text-accent">$</span> echo "Securing the web, one bug at a time."
            <br />
            <span className="text-gray-500 mt-1 block">&gt; securing the web, one bug at a time.</span>
          </div>

          <div className="text-gray-500 text-sm flex items-center gap-2">
            Built with 
            <span className="text-gray-700 font-medium">React</span> • 
            <span className="text-gray-700 font-medium">TypeScript</span> • 
            <span className="text-gray-700 font-medium">Tailwind CSS</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
