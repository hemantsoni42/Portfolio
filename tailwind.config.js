/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        fusion:'url("/bg-fusion.png")',
        planets:'url("/planets.jpg")',
        astronaut:'url("/astronaut.png")',
        space:'url("/space.jpg")',
        planetEarth:'url("/planetEarth.jpg")',
        galaxyNight:'url("/galaxy-night.jpg")',
        galaxy:'url("/galaxy.jpg")',
        saturn:'url("/saturn.jpg")',
        nebula:'url("/nebula.jpg")',
        eSpace:'url("/eSpace.jpg")',
        blackhole:'url("/blackhole.png")',
        moon:'url("/moon.jpg")',
        earth:'url("/earth.png")',
        circles: 'url("/bg-circles.png")',
        star: 'url("/stars.jpg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};