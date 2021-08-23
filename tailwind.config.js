module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.svg", "./src/**/*.js"],
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
        "hero-home-mobile": "url('../img/annie-spratt-135307-unsplash.png')",
        "hero-home-tablet": "url('../img/hero-tablet.png')",
        "hero-home-desktop": "url('../img/hero-desktop.png')",
        "dyk-home-mobile": "url('../img/dyk-bg.png')",
        "dyk-bg-tablet": "url('../img/dyk-bg-tablet.png')",
        "dyk-bg-lg": "url('../img/dyk-lg.png')",
      }),
      fontSize: {
        "0xs": "0.688rem",
        "1xl": "1.375rem",
        "2-5xl": "1.75rem",
        "4-5xl": "2.75rem",
      },
      height: {
        77: "19.375rem",
        82: "20.5rem",
        86: "21rem",
        88: "22rem",
      },
      margin: {
        18: "4.5rem",
        "-108": "-27rem",
      },
      padding: {
        15: "3.875rem",
        160: "40rem",
      },
      width: {
        36: "9.5rem",
        62: "15.5rem",
        148: "19.5rem",
        88: "22rem",
        112: "28rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        260: "40rem",
        240: "60rem",
        280: "70rem",
        320: "80rem",
      },
      zIndex: {
        "-1": "-1",
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
