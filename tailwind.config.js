module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 600: "#ffdc26" },
        blue_gray: { 100: "#d9d9d9", 900: "#323232" },
        gray: { 900: "#171717", "100_6c": "#f6f5f36c", "800_6c": "#4444446c" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", passionone: "Passion One" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
