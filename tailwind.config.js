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
      },
    },
  },
  plugins: [flowbite.plugin()],
};
