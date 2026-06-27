/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1D26',
        'ink-soft': '#142B38',
        'ink-raise': '#1A3444',
        paper: '#ECEEEB',
        'paper-dim': '#9FB0B8',
        sky: '#99CAD5',
        steel: '#4D81A7',
        ember: '#F2A65A',
        'ember-deep': '#D6883C',
        line: '#21404F',
        gold: '#D4AF6A',
        'gold-soft': '#EAD9B0',
        platinum: '#C9D2D8',
        'platinum-soft': '#EFF3F5',
        'platinum-deep': '#8C99A1',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #99CAD5 0%, #4D81A7 100%)',
        'brand-gradient-v': 'linear-gradient(180deg, #99CAD5 0%, #4D81A7 100%)',
        'ember-gradient': 'linear-gradient(135deg, #F2A65A 0%, #D6883C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #EAD9B0 0%, #D4AF6A 50%, #9C7A3D 100%)',
        'platinum-gradient': 'linear-gradient(135deg, #F5F7F8 0%, #C9D2D8 50%, #8C99A1 100%)',
        grid: 'linear-gradient(rgba(153,202,213,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(153,202,213,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        pulseTrace: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 1 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pulseTrace: 'pulseTrace 2.4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}