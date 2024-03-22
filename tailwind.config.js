/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#1c1a1a", //
      darkGray: "#333333",
      gray: "#666666",
      lightGray: "#8D8D8D",
      yellow: "#ECCD43",
      green: "#497435",
      rosybrown: "#BA8E8E",
      red: "#DD3636",
      warmBlue: "#435BD7",
    },
  },
};
export const plugins = [];
