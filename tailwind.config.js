/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': ' hsl(209, 23%, 22%)',
        'white': 'hsl(0, 0%, 100%)',

        'DarkMode': {
          'Blue': 'hsl(207, 26%, 17%)',
        },
        'DarkMode': {
          'dark-blue': 'hsl(200, 15%, 8%)'
        },
        'lightMode': {
          'dark-gray': 'hsl(0, 0%, 52%)'
        },
        'LighMode': {
          'light-gray': 'hsl(0, 0%, 98%)'
        },

      }

    },
  },
  plugins: [],
}
