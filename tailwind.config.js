/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono:
          "'Kode Mono', 'Nimbus Mono PS', 'ui - monospace', 'SFMono - Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    },
  },
  plugins: [],
};
