/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        canada: {
          // WCAG AA compliant colors (4.5:1 contrast ratio on white)
          red: '#E31837', // Refined Canadian Red
          darkRed: '#8C031E',
          leaf: '#E31837',
          accent: '#FF4D4D',
          subtle: '#FFF1F2'
        },
        modern: {
          glass: 'rgba(255, 255, 255, 0.4)',
          glassBorder: 'rgba(255, 255, 255, 0.5)',
          glassDark: 'rgba(15, 23, 42, 0.7)',
          glassDarkBorder: 'rgba(255, 255, 255, 0.1)',
          neutral: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(0, 100%, 98%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(350, 100%, 92%, 1) 0, transparent 50%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
        'bento-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      boxShadow: {
        'glass': '0 2px 8px 0 rgba(0, 0, 0, 0.02)',
        'glass-hover': '0 4px 16px 0 rgba(227, 24, 55, 0.04)',
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.005)',
        'bento': '0 0 0 1px rgba(0,0,0,0.01), 0 1px 3px rgba(0,0,0,0.01)',
        'bento-hover': '0 0 0 1px rgba(227, 24, 55, 0.03), 0 4px 12px rgba(227, 24, 55, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'mesh': 'mesh 30s ease infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
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
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        mesh: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
    }
  },
  plugins: [],
}
