export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'atom-primary': 'hsl(var(--atom-primary))',
        'atom-primary-light': 'hsl(var(--atom-primary-light))',
        'atom-metallic': 'hsl(var(--atom-metallic))',
        'atom-metallic-light': 'hsl(var(--atom-metallic-light))',
        'electric': 'hsl(var(--electric))',
        'electric-glow': 'hsl(var(--electric-glow))',
        'background': 'hsl(var(--background))',
        'background-secondary': 'hsl(var(--background-secondary))',
        'card-text': 'hsl(var(--card-text))',
        'metallic-text': 'hsl(var(--metallic-text))',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
