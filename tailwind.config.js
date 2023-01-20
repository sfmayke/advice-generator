/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-cyan": "#cee3e9",
        "neon-green": "#52ffa8",
        "grayish-blue": "#4e5d73",
        "dark-grayish-blue": "#323a49",
        "dark-blue": "#1f2632",
      },
    },
  },
  plugins: [],
};
