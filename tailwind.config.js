module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      offWhite: "#f5f3ff",
      black: "#191919",
      blue: "#3E2EA6",
      purple: "#804CCA",
      dark: "#221C33",
      teal: "#53B7E3",
      pink: "#C452B4",
      gray: "#374151",
    },
  },
  plugins: ["backgroundColor"],
};
