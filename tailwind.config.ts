import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Override default screens with our breakpoint system
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f4fc',
          200: '#b9e5f7',
          300: '#7ccdf0',
          400: '#39b1e6',
          500: '#187baa',
          600: '#156a93',
          700: '#12587c',
          800: '#0e4665',
          900: '#0b344e',
        },
        secondary: {
          50: '#f5f8ef',
          100: '#e7efd8',
          200: '#cfdeb1',
          300: '#b7cd8a',
          400: '#9db952',
          500: '#7e9442',
          600: '#5f7031',
          700: '#3f4b21',
          800: '#202610',
          900: '#101308',
        },
        neutral: {
          50: '#f8fafc',
          100: '#eef4f8',
          200: '#e2eaf1',
          300: '#c2d0dc',
          400: '#94a7b8',
          500: '#657d93',
          600: '#4a5f71',
          700: '#364553',
          800: '#1e2831',
          900: '#0f1419',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 8s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '33%': {
            transform: 'translate(-50%, -50%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(-50%) scale(1)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateX(-50%) translateY(-50%) scale(1.2)',
            opacity: '0.1',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
