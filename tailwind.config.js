/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'accent-color': 'var(--accent-color)',
        'success-color': 'var(--success-color)',
        'error-color': 'var(--error-color)',
        'background': 'var(--background)',
        'text-color': 'var(--text-color)',
        'text-muted': 'var(--text-muted)',
      },
      backgroundColor: {
        'glass-bg': 'var(--glass-bg)',
      },
      borderColor: {
        'glass-border': 'var(--glass-border)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-hero': 'var(--gradient-hero)',
      },
    },
  },
  plugins: [],
} 