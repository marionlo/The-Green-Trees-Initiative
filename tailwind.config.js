module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        flood: ["Flood Std Regular", "sans-serif"],
      },
      colors: {
        deepblue: "#354463",
        lime: "#C1F7D5",
      },
      backgroundImage: (theme) => ({
        "hero-home-mobile":
          "url('/assets/img/annie-spratt-135307-unsplash.png')",
      }),
      fontSize: {
        "1xl": "1.375rem",
        "4-5xl": "2.75rem",
      },
      height: {
        herohome: "37rem",
      },
      margin: {
        18: "4.5rem",
      },
      width: {
        148: "19.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
