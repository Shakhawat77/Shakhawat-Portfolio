/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6F59",
        "primary-hover": "#E55A45",
        "background-light": "#F3F4F6",
        "background-dark": "#0D1117",
        "surface-dark": "#161B22",
        "text-light": "#1F2937",
        "text-dark": "#E5E7EB",
        "accent-text": "#9CA3AF",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 70% 50%, rgba(255, 111, 89, 0.15) 0%, rgba(13, 17, 23, 0) 60%)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 2s'
      }
    },
  },
  plugins: [],
}