/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Fira Code'", "monospace"],
        body: ["'Antic'", "sans-serif"],
      },
      colors: {
        accent: {
          cyan: "#06b6d4",
          purple: "#a855f7",
          blue: "#3b82f6",
        }
      },
      animation: {
        'grid-scroll': 'grid-scroll 25s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'grid-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
