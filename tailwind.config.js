/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{'100':'30rem'},
      colors: {
        'dark-blue': ' hsl(209, 23%, 22%)',
        'white': 'hsl(0, 0%, 100%)',
        'DarkMode': {
          'dark-blue': 'hsl(200, 15%, 8%)',
          'mid-blue': 'hsl(207, 26%, 17%)',

        },
        'LightMode': {
          'light-gray': 'hsl(0, 0%, 98%)',
          'dark-gray': 'hsl(0, 0%, 52%)'

        },

      }

    },
  },
  plugins: [],
}
