/********** Tailwind Config for JOBBLY **********/
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#4F46E5',
          light: '#A78BFA',
        },
        midnight: '#0B1020',
        dark: '#0F172A',
        accent: '#22D3EE',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1200px 600px at 80% -10%, #7C3AED33 0%, transparent 60%), radial-gradient(1000px 500px at 20% -10%, #2563EB33 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
