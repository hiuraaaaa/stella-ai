// tailwind.config.mjs
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
};
