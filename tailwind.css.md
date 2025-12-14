@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Primary Colors */
  --color-primary: #1B365D; /* Deep navy - trust and professional authority */
  --color-primary-50: #F0F4F8; /* Very light navy tint */
  --color-primary-100: #D6E4F0; /* Light navy tint */
  --color-primary-200: #B8D4EA; /* Medium light navy */
  --color-primary-300: #8BB8E0; /* Medium navy */
  --color-primary-400: #5A9BD4; /* Medium dark navy */
  --color-primary-500: #1B365D; /* Base navy */
  --color-primary-600: #162D4F; /* Dark navy */
  --color-primary-700: #122441; /* Darker navy */
  --color-primary-800: #0E1B33; /* Very dark navy */
  --color-primary-900: #0A1225; /* Deepest navy */

  /* Secondary Colors */
  --color-secondary: #F8F9FA; /* Soft white - breathing room */
  --color-secondary-50: #FFFFFF; /* Pure white */
  --color-secondary-100: #F8F9FA; /* Base soft white */
  --color-secondary-200: #F1F3F4; /* Subtle grey */
  --color-secondary-300: #E9ECEF; /* Light grey */
  --color-secondary-400: #DEE2E6; /* Medium light grey */
  --color-secondary-500: #CED4DA; /* Medium grey */
  --color-secondary-600: #ADB5BD; /* Medium dark grey */
  --color-secondary-700: #868E96; /* Dark grey */
  --color-secondary-800: #495057; /* Darker grey */
  --color-secondary-900: #343A40; /* Darkest grey */

  /* Accent Colors */
  --color-accent: #D4AF37; /* Refined gold - key actions */
  --color-accent-50: #FEFCF0; /* Very light gold tint */
  --color-accent-100: #FDF6D3; /* Light gold tint */
  --color-accent-200: #FBEAA6; /* Medium light gold */
  --color-accent-300: #F7DD79; /* Medium gold */
  --color-accent-400: #F3D04C; /* Medium dark gold */
  --color-accent-500: #D4AF37; /* Base gold */
  --color-accent-600: #B8962F; /* Dark gold */
  --color-accent-700: #9C7D27; /* Darker gold */
  --color-accent-800: #80641F; /* Very dark gold */
  --color-accent-900: #644B17; /* Deepest gold */

  /* Background Colors */
  --color-background: #FFFFFF; /* Pure white - maximum clarity */
  --color-surface: #F1F3F4; /* Subtle grey - card boundaries */

  /* Text Colors */
  --color-text-primary: #2D3748; /* Charcoal - strong readability */
  --color-text-secondary: #718096; /* Medium grey - hierarchy support */

  /* Status Colors */
  --color-success: #38A169; /* Professional green - positive outcomes */
  --color-success-50: #F0FFF4; /* Very light green tint */
  --color-success-100: #C6F6D5; /* Light green tint */
  --color-success-500: #38A169; /* Base green */
  --color-success-600: #2F855A; /* Dark green */
  --color-success-700: #276749; /* Darker green */

  --color-warning: #D69E2E; /* Amber - important information */
  --color-warning-50: #FFFBEB; /* Very light amber tint */
  --color-warning-100: #FEF5E7; /* Light amber tint */
  --color-warning-500: #D69E2E; /* Base amber */
  --color-warning-600: #B7791F; /* Dark amber */
  --color-warning-700: #975A16; /* Darker amber */

  --color-error: #E53E3E; /* Clear red - issue indication */
  --color-error-50: #FED7D7; /* Very light red tint */
  --color-error-100: #FEB2B2; /* Light red tint */
  --color-error-500: #E53E3E; /* Base red */
  --color-error-600: #C53030; /* Dark red */
  --color-error-700: #9B2C2C; /* Darker red */

  /* Border Colors */
  --color-border: #E2E8F0; /* Light grey borders */
  --color-border-light: #F7FAFC; /* Very light borders */
  --color-border-dark: #CBD5E0; /* Darker borders */

  /* Shadow Variables */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Animation Variables */
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-base: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}

/* Base Styles */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    line-height: 1.6;
  }

  /* Respect user motion preferences */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Component Styles */
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out hover:bg-primary-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .btn-secondary {
    @apply bg-secondary border border-border text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out hover:bg-surface hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }

  .btn-accent {
    @apply bg-accent text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out hover:bg-accent-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2;
  }
.card  {
    @apply bg-background border border-border rounded-lg p-6 transition-all duration-300 ease-out hover:shadow-md;
  }

  .input-field {
    @apply w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ease-out;
  }

  .text-heading {
    @apply font-inter font-semibold text-text-primary;
  }

  .text-body {
    @apply font-inter text-text-primary;
  }

  .text-caption {
    @apply font-inter text-sm text-text-secondary;
  }

  .text-data {
    @apply font-mono text-text-primary;
  }
}

/* Utility Classes */
@layer utilities {
  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .shadow-subtle {
    box-shadow: var(--shadow-base);
  }

  .shadow-elevated {
    box-shadow: var(--shadow-md);
  }

  .shadow-floating {
    box-shadow: var(--shadow-lg);
  }

  .transition-smooth {
    transition: all var(--duration-normal) var(--ease-out);
  }

  .transition-fast {
    transition: all var(--duration-fast) var(--ease-out);
  }
}