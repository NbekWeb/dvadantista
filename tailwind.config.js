module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: "#2c2c2c",
        blue: "#128ced",
        green: "#3f684a",
        light_gray: "#c4c4c4",
        red: "#f93c3c",
        orange: "#dd5c2f",
        "light-blue": "#90c7dc",
        "light-gray": "#cecece",
        "light-green": "#7db928",
      },
      spacing: {
        15: "60px",
        27: "108px",
        30: "120px",
        65: "260px",
        70: "280px",
        110: "440px",
        140: "560px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
