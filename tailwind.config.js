/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        enlarge: "beat 2s infinite",
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: "scale(0.95)" },
          '70%': { transform: "scale(1)", 'background-color': "#f59e0b" },
        },
      },
    },
  },
  plugins: [],
};
