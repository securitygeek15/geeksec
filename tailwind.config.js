import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          cyan: '#00e5ff',
          magenta: '#ff0080',
          green: '#00ff41',
          dark: '#0a0a0a',
          surface: '#0f0f0f',
          border: '#1a1a1a',
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,229,255,0.15)',
        'neon-magenta': '0 0 20px rgba(255,0,128,0.15)',
        'neon-green': '0 0 20px rgba(0,255,65,0.15)',
        'glow-cyan': '0 0 40px rgba(0,229,255,0.25)',
        'glow-magenta': '0 0 40px rgba(255,0,128,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
