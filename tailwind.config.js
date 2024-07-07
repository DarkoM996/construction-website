/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary_lighterColor: {
          100: "#F1F1F1",
          200: "#EDEDED",
          300: "#E6E6E6",
          400: "#E0E0E0",
          500: "#D9D9D9",
        },
        primary_backgroundColor: {
          600: "#262626",
          700: "#1F1F1F",
          800: "#191919",
          850: "#121212",
          900: "#0D0C0C",
        },
      },
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
    },
  },
  plugins: [],
};
