/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06b6d4",
          hover: "#0891b2",
        },
        secondary: "#94a3b8",
      },
      borderRadius: {
        container: "0.75rem",
      },
      gap: {
        section: "2rem",
      },
    },
  },
  plugins: [],
};

