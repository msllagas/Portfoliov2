/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        beat: "beat 2s infinite",
      },
      keyframes: {
        beat: {
          "0%, 100%": { transform: "scale(0.95)" },
          "70%": { transform: "scale(1)", "background-color": "#f59e0b" },
        },
      },
      dropShadow: {
        css: "0 0 2em rgba(17,114,184,1.000)",
        html: "0 0 2em rgba(228,77,38,1.000)",
        javascript: "0 0 2em rgba(247,223,30,1.000)",
        java: "0 0 2em rgba(231,111,0,1.000)",
        csharp: "0 0 2em rgba(102,37,121,1.000)",
        tailwind: "0 0 2em rgba(68,168,179,1.000)",
        bootstrap: "0 0 2em rgba(86,61,124,1.000)",
        react: "0 0 2em rgba(83,193,222,1.000)",
        spring: "0 0 2em rgba(112,173,81,1.000)",
        firebase: "0 0 2em rgba(252,202,63,1.000)",
        sqlite: "0 0 2em rgba(151,217,246,1.000)",
        mysql: "0 0 2em rgba(0,117,143,1.000)",
        figma: "0 0 2em rgba(255,114,98,1.000)",
        git: "0 0 2em rgba(238,81,59,1.000)",
        unity: "0 0 2em rgba(149,151,152,1.000)",
      },
    },
  },
  plugins: [],
};
