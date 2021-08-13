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
        82: "20.5rem",
        88: "22rem",
      },
      margin: {
        18: "4.5rem",
      },
      padding: {
        15: "3.875rem",
      },
      width: {
        36: "9.5rem",
        148: "19.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
