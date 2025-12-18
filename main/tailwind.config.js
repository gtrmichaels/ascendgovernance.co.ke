/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Darker brand green
        primary: {
          DEFAULT: "#213B31",
          50: "#E7EFEA",
          100: "#CFDFD5",
          200: "#9FC0AB",
          300: "#6FA081",
          400: "#3F8157",
          500: "#213B31",
          600: "#1C3229",
          700: "#162921",
          800: "#112119",
          900: "#0B1610",
        },
        // Secondary Colors - Soft white for breathing room
        secondary: {
          DEFAULT: "#F8F9FA", // gray-50
          50: "#FFFFFF", // white
          100: "#F8F9FA", // gray-50
          200: "#F1F3F4", // gray-100
          300: "#E9ECEF", // gray-200
          400: "#DEE2E6", // gray-300
          500: "#CED4DA", // gray-400
          600: "#ADB5BD", // gray-500
          700: "#868E96", // gray-600
          800: "#495057", // gray-700
          900: "#343A40", // gray-800
        },
        // Accent Colors - Refined gold for key actions
        accent: {
          DEFAULT: "#D4AF37", // yellow-600
          50: "#FEFCF0", // yellow-50
          100: "#FDF6D3", // yellow-100
          200: "#FBEAA6", // yellow-200
          300: "#F7DD79", // yellow-300
          400: "#F3D04C", // yellow-400
          500: "#D4AF37", // yellow-600
          600: "#B8962F", // yellow-700
          700: "#9C7D27", // yellow-800
          800: "#80641F", // yellow-900
          900: "#644B17", // yellow-950
        },
        // Background and Surface
        background: "#FAFCFB", // very light green tint
        surface: "#E0E8EB", // darker gray-blue for contrast
        // Text Colors
        text: {
          primary: "#2D3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#38A169", // green-600
          600: "#2F855A", // green-700
          700: "#276749", // green-800
        },
        warning: {
          DEFAULT: "#D69E2E", // orange-500
          50: "#FFFBEB", // orange-50
          100: "#FEF5E7", // orange-100
          500: "#D69E2E", // orange-500
          600: "#B7791F", // orange-600
          700: "#975A16", // orange-700
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
          700: "#9B2C2C", // red-700
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
          dark: "#CBD5E0", // gray-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'sm': '4px',
        'base': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

