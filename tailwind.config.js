module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#191919",
      blue: "#3E2EA6",
      purple: "#804CCA",
      dark: "#221C33",
      teal: "#53B7E3",
      pink: "#C452B4",
      gray: "#8e8e8e",
    },
    // extend: {
    //   colors: {
    //     teal: "#53B7E3",
    //   },
    // },
  },
  plugins: ["backgroundColor"],
};
