export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-background py-12">
      {/* Subtle grid background for footer */}
      <div className="grid-bg absolute inset-0 opacity-10"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="text-sm text-gray-500">
            © {currentYear} GeekSec
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 font-mono text-xs text-gray-600">
            <span className="text-accent">$</span> echo "Securing the web, one bug at a time."
            <br />
            <span className="mt-1 block text-gray-500">&gt; securing the web, one bug at a time.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            Built with 
            <span className="font-medium text-gray-700">React</span> • 
            <span className="font-medium text-gray-700">TypeScript</span> • 
            <span className="font-medium text-gray-700">Tailwind CSS</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
