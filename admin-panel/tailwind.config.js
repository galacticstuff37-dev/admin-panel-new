/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#221c38',
        'sidebar-bg': '#1e1934',
        primary: '#3d5ddf',
        'primary-high': '#6e87ff',
        'primary-20': 'rgba(61, 93, 223, 0.2)',
        positive: '#1ccc85',
        contour: 'rgba(255, 255, 255, 0.06)',
        'white-3': 'rgba(255, 255, 255, 0.03)',
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
        'black-40': '#a5a7ae',
        'black-60': '#a5a7ae',
      },
      fontFamily: {
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
      },
      fontSize: {
        'admin-label': ['11.54px', { lineHeight: 'normal' }],
        'admin-menu': ['16px', { lineHeight: 'normal' }],
        'h2': ['32px', { lineHeight: '100%' }],
        'h3': ['28px', { lineHeight: '100%' }],
        'mini': ['12px', { lineHeight: '100%' }],
      },
      borderRadius: {
        'basic': '8px',
        'basic-4': '4px',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}

