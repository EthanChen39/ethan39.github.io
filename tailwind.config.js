/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-mode-background": "#F9FBFB",
        "dark-mode-background": "#090d07",

        "primary": "#b2d2c9",

        "accent-light": "#9EDCCC",
        "accent-dark": "#FBFEFD",
        
        "secondary-light": "#d1e6e1",
        "secondary-dark": "#182818",

        "text-light": "##111d1a",
        "text-dark": "#F9FBFB",

        "amazon-orange": "#FF9900",
        "boeing-blue": "#1A409F",
        "cnr-red": "#CF4A37",
      },
      animation: {
        "shimer": "shimer 1.5s linear infinite",
        "underline-ani": "underline 0.5s ease-in-out infinite alternate",
      },
      scale: ['group-hover'],
    }
  },
  plugins: [],
  darkMode: "class",
});
